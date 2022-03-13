import { AfterViewChecked, ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";
import { ScullyRoute, ScullyRoutesService } from "@scullyio/ng-lib";
import * as removeFbclid from "remove-fbclid";
import { Observable, of } from "rxjs";
import { map, share, tap } from "rxjs/operators";
import { SocialTagsService } from "../shared/social-tags-services";
import { HighlightService } from "./highlight.service";

declare var ng: any;

@Component({
    selector: "app-blog",
    templateUrl: "./blog.component.html",
    styleUrls: ["./blog.component.scss", "./github-markdown.scss"],
    preserveWhitespaces: true,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit, AfterViewChecked {
    // links$: Observable<ScullyRoute[]> = this.scully.available$;
    scroll$: Observable<boolean> = of(true);
    current: Observable<ScullyRoute> = of(null);
    title: Observable<String> = of("");
    title1: Observable<String> = of("");
    title2: Observable<String> = of("");
    startDate$: Observable<String> = of("");
    endDate$: Observable<String> = of("");
    location$: Observable<String> = of("");
    headerImage$: Observable<String> = of("");

    displayControl = false;
    activeTabIndex = 2;
    subcribed = false;

    constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService, private highlightService: HighlightService, private socialTagService: SocialTagsService) {
        socialTagService.setTitleAndTags();
    }

    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }

    ngOnInit() {
        // debug current pages
        removeFbclid();

        this.current = this.scully.getCurrent().pipe(share());
        this.endDate$ = this.current.pipe(
            tap((res) => {
                if (res) {
                    let date = new Date(res.date_end);
                    let oDate = localStorage.getItem(res.slug);
                    if (oDate) {
                        let oldDate = new Date(oDate);
                        if (oldDate < date) {
                            localStorage.setItem(res.slug, res.date_end);
                            // this.openSnackBar();
                        }
                    } else {
                        localStorage.setItem(res.slug, res.date_end);
                    }
                }
            }),
            map((res) => {
                let date = new Date();
                if (res) {
                    date = new Date(res.date_end);
                }
                // return date.toISOString().split("T")[0];
                return date.toLocaleString("en-US", { day: "2-digit", month: "short", year: "numeric" });
            })
        );
        let sharedTitle$ = this.current.pipe(
            map((res) => {
                if (res) return res.title;
                return "This is a secret";
            })
        );
        this.headerImage$ = this.current.pipe(
            map((res) => {
                if (res) return res.header_image;
                return "https://i.imgur.com/9SYJ5pX.png";
            })
        );
        this.location$ = this.current.pipe(
            map((res) => {
                if (res) return res.location;
                return "Hanoi, Vietnam";
            })
        );
        this.title = sharedTitle$.pipe(map((title) => title.replace("　", " ")));
        this.title1 = sharedTitle$.pipe(map((title) => title.split("　")[0]));
        this.title2 = sharedTitle$.pipe(map((title) => title.split("　").slice(1).join()));
    }

    tabChanged(tabChangeEvent: MatTabChangeEvent) {
        let index = tabChangeEvent.index;
        this.router.navigateByUrl(`/?index=${index}`);
    }
    onTabGroupClicked() {
        this.router.navigateByUrl(`/?index=${this.activeTabIndex}`);
    }

    scrollToTop() {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

    scrollToBottom() {
        window.scrollTo({ left: 0, top: document.body.clientHeight, behavior: "smooth" });
    }
}
