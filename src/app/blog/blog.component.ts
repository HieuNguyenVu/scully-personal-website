import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { Router } from "@angular/router";
import { ScullyRoute, ScullyRoutesService } from "@scullyio/ng-lib";
import * as removeFbclid from "remove-fbclid";
import { Observable, of } from "rxjs";
import { map, share, switchMap, tap } from "rxjs/operators";
import { Mode } from "../main-screen/after-work/after-work.component";
import { Post } from "../main-screen/portfolio/project.model";
import { PostsService } from "../shared/posts.service";
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
    postContent$: Observable<{ title1: String; title2: String; location: String; headerImage: String; endDate: String }>;

    startDate$: Observable<String>;
    endDate$: Observable<String>;
    location$: Observable<String>;
    headerImage$: Observable<String>;

    displayControl = false;
    activeTabIndex = 2;
    subcribed = false;
    link: string = "";
    // Posts
    posts$: Observable<Post[]>;

    tags$: Observable<String[]>;
    series$: Observable<String[]>;
    @ViewChild("rightContainer") rightContainer: ElementRef<HTMLDivElement>;
    constructor(
        private router: Router,
        private scully: ScullyRoutesService,
        private highlightService: HighlightService,
        private socialTagService: SocialTagsService,
        private postService: PostsService
    ) {
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
        // Get current post
        this.current = this.scully.getCurrent().pipe(share());

        this.postContent$ = this.current.pipe(
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
                return {
                    title1: res.title.split("　")[0],
                    title2: res.title.split("　").slice(1).join(),
                    location: res.location,
                    headerImage: res.header_image,
                    endDate: date.toLocaleString("en-US", { day: "2-digit", month: "short", year: "numeric" }),
                };
            })
        );

        // get suggest post
        this.posts$ = this.postService.getPosts(2, Mode.tech);
        this.series$ = this.postService.getPosts(50, Mode.tech).pipe(
            map((posts) => {
                let seri = posts.map((post) => {
                    return post.title.match(/^\[(\S+)\]/)[1];
                });
                return [...new Set(seri)];
            })
        );
        this.tags$ = this.postService.getTags(10);
        window.onscroll = (event) => {
            this.rightContainer.nativeElement.scrollTop = window.scrollY;
        };
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
