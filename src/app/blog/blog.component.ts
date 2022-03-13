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
    current: Observable<ScullyRoute>;
    title: Observable<String>;
    title1: Observable<String>;
    title2: Observable<String>;
    startDate$: Observable<String>;
    endDate$: Observable<String>;
    location$: Observable<String>;
    headerImage$: Observable<String>;

    displayControl = false;
    activeTabIndex = 2;
    subcribed = false;
    link: string = "";

    constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService, private highlightService: HighlightService, private socialTagService: SocialTagsService) {
        socialTagService.setTitleAndTags();
    }
    /**
     * After view checked - highlight code in Primsjs
     */
    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }
    /**
     * On init
     */
    ngOnInit() {
        // debug current pages
        removeFbclid();

        this.current = this.scully.getCurrent().pipe(share());
        this.endDate$ = this.current.pipe(
            tap((res) => {
                if (res) {
                    this.link = res.link;
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
    /**
     * On tab change event
     * @param tabChangeEvent
     */
    tabChanged(tabChangeEvent: MatTabChangeEvent) {
        let index = tabChangeEvent.index;
        this.router.navigateByUrl(`/?index=${index}`);
    }
    /**
     * Change tab click
     */
    onTabGroupClicked() {
        this.router.navigateByUrl(`/?index=${this.activeTabIndex}`);
    }
    /**
     * Scroll to top
     */
    scrollToTop() {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
    /**
     * Scroll to bottom
     */
    scrollToBottom() {
        window.scrollTo({ left: 0, top: document.body.clientHeight, behavior: "smooth" });
    }
    /**
     * Go to source markdown file
     */
    gotoSource() {
        window.open("https://github.com/nhvu95/scully-personal-website/tree/main/" + this.link + ".md", "_blank");
    }
    /**
     * Share post to facebook
     */
    shareFb() {
        let u = location.href;
        let t = document.title;
        window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(u) + "&t=" + encodeURIComponent(t), "sharer", "toolbar=0,status=0,width=626,height=436");
    }
    /**
     * Share post to linkedin
     */
    shareLinkedin() {
        let u = location.href;
        window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(u), "sharer", "toolbar=0,status=0,width=626,height=436");
    }
    /**
     * Share post to twitter
     */
    shareTwitter() {
        let u = location.href;
        window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(u), "sharer", "toolbar=0,status=0,width=626,height=436");
    }
}
