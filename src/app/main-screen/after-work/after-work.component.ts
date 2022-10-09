import { COMMA, ENTER, SPACE } from "@angular/cdk/keycodes";
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatTabChangeEvent, MatTabGroup } from "@angular/material/tabs";
import { ScullyRoute } from "@scullyio/ng-lib";
import { BehaviorSubject, Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { Post } from "../portfolio/project.model";
import { PostsService } from "../../shared/posts.service";

export enum Mode {
    "non-tech" = 0,
    "tech" = 1,
    "all" = 2,
}

const ALL_STR = "All";

@Component({
    selector: "app-after-work",
    templateUrl: "./after-work.component.html",
    styleUrls: ["./after-work.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AfterWorkComponent implements OnInit, OnDestroy {
    @Input()
    currentNavIndex = 0;

    _posts: BehaviorSubject<Post[][]> = new BehaviorSubject<Post[][]>([]);
    posts$: Observable<Post[][]> = this._posts.asObservable();
    keywords$: Observable<String[]>;

    allPosts: Post[] = [];
    allCurrentModePost: Post[] = [];

    remains: Post[] = [];
    selectedKeywords: String[] = [];
    allKeywords: String[] = [];
    searchFormControl = new FormControl();
    separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];

    subcribed = false;

    @ViewChild("keywordInput") keywordInput: ElementRef<HTMLInputElement>;
    @ViewChild("matTabGroup") matTabGroup: MatTabGroup;

    constructor(private postsService: PostsService) {}

    ngOnInit(): void {
        this.keywords$ = this.searchFormControl.valueChanges.pipe(
            startWith(null),
            map((key: string | null) => (key ? this._filter(key) : this.allKeywords.slice().filter((i) => !this.selectedKeywords.includes(i))))
        );

        this.postsService.getPosts(Number.MAX_VALUE, Mode.all).subscribe((links) => {
            this.allPosts = links;
            this.updateMode(Mode.all);
        });
    }

    ngOnDestroy(): void {}
    /**
     * Update mode - Switch tab
     * @param mode
     */
    updateMode(mode: Mode) {
        let displayPost = this.allPosts.filter((link) => {
            if (mode == Mode.tech) return link.type_index === undefined || link.type_index === mode;
            if (mode == Mode["non-tech"]) return link.type_index !== undefined && link.type_index === mode;
            return true;
        });
        displayPost = displayPost.filter(post => post.exist);

        this.allKeywords = [...new Set(displayPost.map((item) => item.tags as String[]).flat())] as String[];
        if (this.selectedKeywords.length == 0) this.selectedKeywords.push(ALL_STR);

        this.searchFormControl.setValue(null);

        this.allCurrentModePost = displayPost;
        this.updateFilter(this.selectedKeywords);
    }
    /**
     * Update display when filter change
     */
    updateFilter(keywords?: String[]) {
        let result = this.allCurrentModePost;
        if (keywords && keywords.length > 0) {
            result = this.allCurrentModePost.filter((post) =>
                // If this post have at least 1 tag
                post.tags.some((tag) => {
                    // which match with the selected key words
                    return this.selectedKeywords.some((key: string) => {
                        if (key === ALL_STR) return tag;
                        return tag.includes(key);
                    });
                })
            );
        }
        let first = result.slice(0, 5);
        this.remains = result.slice(5);
        let arrs = [[first[0]], [first[1], first[3]], [first[2], first[4]]];
        this._posts.next(arrs);
    }
    /**
     * Scroll To
     */
    focusTo(focus: boolean) {
        if (focus) this.keywordInput.nativeElement.focus();
    }
    @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
        //In chrome and some browser scroll is given to body tag
        let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        let max = document.documentElement.scrollHeight;
        // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
        if (pos + 50 >= max) {
            //Do your action here
            this.loadMore();
        }
    }
    /**
     * On load more
     */
    loadMore() {
        let takeTwoRow = this.remains.splice(0, 6);
        let news = this._posts.getValue();
        while (true) {
            let takeData = takeTwoRow.splice(0, 3);
            if (takeData.length == 0) {
                break;
            }
            for (let i = 3; i > takeData.length; i--) {
                takeData.push({ exist: false });
            }
            news[0].push(takeData[0]);
            news[1].push(takeData[1]);
            news[2].push(takeData[2]);
        }
        this._posts.next(news);
    }

    /**
     * On Tab Change
     * @param tab {tab, index}
     */
    tabChanged(tab: MatTabChangeEvent) {
        this.updateMode(tab.index);
        this.matTabGroup._elementRef.nativeElement.setAttribute("selected-index", String(tab.index));
    }
    /**
     * Filter keywords match
     * @param value keyword
     * @returns
     */
    private _filter(value: string): String[] {
        const filterValue = value.toLowerCase();
        console.log(value);
        return this.allKeywords.filter((keyword) => !this.selectedKeywords.includes(keyword) && keyword.toLowerCase().includes(filterValue));
    }
    /**
     * Add a chip
     * @param event
     */
    add(event: MatChipInputEvent): void {
        const value = (event.value || "").trim();
        if (value && !this.selectedKeywords.includes(value)) {
            if (this.selectedKeywords[0] === ALL_STR) this.selectedKeywords = [];
            this.selectedKeywords.push(value);
        }
        // Clear the input value
        this.keywordInput.nativeElement.value = "";
        this.searchFormControl.setValue(null);
        this.updateFilter(this.selectedKeywords);
    }
    /**
     * Remove a chip
     * @param keyword
     */
    remove(keyword: string): void {
        const index = this.selectedKeywords.indexOf(keyword);
        if (index >= 0) {
            this.selectedKeywords.splice(index, 1);
        }
        if (this.selectedKeywords.length == 0) this.selectedKeywords.push(ALL_STR);
        this.keywordInput.nativeElement.focus();
        this.updateFilter(this.selectedKeywords);
    }
    /**
     * Select a chip from auto input
     * @param event
     */
    selected(event: MatAutocompleteSelectedEvent): void {
        if (this.selectedKeywords[0] === ALL_STR) this.selectedKeywords = [];
        this.selectedKeywords.push(event.option.viewValue);
        this.keywordInput.nativeElement.value = "";
        this.searchFormControl.setValue(null);
        this.updateFilter(this.selectedKeywords);
    }

    identify(index, keyword) {
        return keyword;
    }
}
