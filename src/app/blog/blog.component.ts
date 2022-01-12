import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";
import { ScullyRoute, ScullyRoutesService } from "@scullyio/ng-lib";
import { Observable, of } from "rxjs";
import { map, share } from "rxjs/operators";
import { SocialTagsService } from "../shared/social-tags-services";
import { HighlightService } from "./highlight.service";

declare var ng: any;

@Component({
    selector: "app-blog",
    templateUrl: "./blog.component.html",
    styleUrls: ["./blog.component.scss", "./github-markdown.scss"],
    preserveWhitespaces: true,
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit, AfterViewInit, AfterViewChecked {
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

    constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService, private highlightService: HighlightService, private socialTagService: SocialTagsService) {
        socialTagService.setTitleAndTags();
    }
    ngAfterViewInit(): void {}

    // @HostListener('window:scroll', ['$event']) // for window scroll events
    // @debounce()
    // onScroll(event) {
    //   if (window.pageYOffset > window.innerHeight * 3) {
    //     this.displayControl = true;
    //   } else {
    //     this.displayControl = false;
    //   }
    // }
    /* ... */
    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }
    ngOnInit() {
        // debug current pages
        this.current = this.scully.getCurrent().pipe(share());
        this.endDate$ = this.current.pipe(
            map((res) => {
                if (res) return res.date_end;
                let date = new Date();
                return date.toISOString().split("T")[0];
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
        this.title = sharedTitle$.pipe(map((title) => title.replace("<br>", " ")));
        this.title1 = sharedTitle$.pipe(map((title) => title.split("<br>")[0]));
        this.title2 = sharedTitle$.pipe(map((title) => title.split("<br>").slice(1).join()));
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
