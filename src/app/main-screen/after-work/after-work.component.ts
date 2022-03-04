import { AfterViewInit, Component, HostListener, Input, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ScullyRoute, ScullyRoutesService } from "@scullyio/ng-lib";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, share } from "rxjs/operators";
import { MainScreenService } from "../main-screen.service";
import { Post } from "../portfolio/project.model";

enum Mode {
    "non-tech" = 0,
    "tech" = 1,
    "all" = 2,
}

@Component({
    selector: "app-after-work",
    templateUrl: "./after-work.component.html",
    styleUrls: ["./after-work.component.scss"],
})
export class AfterWorkComponent implements OnInit {
    @Input()
    currentNavIndex = 0;

    constructor(private service: MainScreenService, private scullyService: ScullyRoutesService) {}
    _projects: BehaviorSubject<Post[][]> = new BehaviorSubject<Post[][]>([]);
    projects$: Observable<Post[][]> = this._projects.asObservable();
    cache: ScullyRoute[] = [];
    remains: Post[] = [];

    ngOnInit(): void {
        let links$ = this.scullyService.allRoutes$.pipe(
            map((scullyRoutes) => scullyRoutes.filter((scullyRoute) => scullyRoute.route.startsWith("/blog"))),
            map((scullyRoutes) => scullyRoutes.sort((postA, postB) => postA.priority - postB.priority)),
            map((scullyRoutes) =>
                scullyRoutes.map((routes) => {
                    // console.log(routes);
                    routes.title = routes.title.replace("　", " ");
                    return routes;
                })
            ),
            share()
        );

        links$.subscribe((links) => {
            this.cache = links;
            this.updateMode(Mode.all);
        });
    }

    updateMode(mode: Mode) {
        let links = this.cache.filter((link) => {
            if(mode == Mode.tech) return link.typeIndex == undefined;
            if(mode == Mode["non-tech"]) return link.typeIndex !== undefined && link.typeIndex.includes(mode);
            return true;
        });
        let first = this.scullyRouteTopProject(links.slice(0, 5));
        this.remains = this.scullyRouteTopProject(links.slice(5));
        let arrs = [[first[0]], [first[1], first[3]], [first[2], first[4]]];
        this._projects.next(arrs);
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

    loadMore() {
        let takeTwoRow = this.remains.splice(0, 6);
        let news = this._projects.getValue();
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
        this._projects.next(news);
    }

    scullyRouteTopProject(scullyRoutes: ScullyRoute[]): Post[] {
        return scullyRoutes.map<Post>((scullyRoute) => {
            return {
                title: scullyRoute.title,
                image: scullyRoute.image,
                tags: scullyRoute.tags,
                description: scullyRoute.description,
                date_start: scullyRoute.date_start,
                date_end: scullyRoute.date_end,
                link: scullyRoute.route,
                exist: scullyRoute.published,
                priority: scullyRoute.priority,
            };
        });
    }

    /**
     * On Tab Change
     * @param tab {tab, index}
     */
    tabChanged(tab: MatTabChangeEvent) {
        this.updateMode(tab.index);
    }
}
