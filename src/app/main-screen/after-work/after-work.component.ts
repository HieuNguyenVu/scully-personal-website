import { AfterViewInit, Component, HostListener, Input, OnInit } from "@angular/core";
import { ScullyRoute, ScullyRoutesService } from "@scullyio/ng-lib";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, share } from "rxjs/operators";
import { MainScreenService } from "../main-screen.service";
import { Project } from "../portfolio/project.model";

@Component({
    selector: "app-after-work",
    templateUrl: "./after-work.component.html",
    styleUrls: ["./after-work.component.scss"],
})
export class AfterWorkComponent implements OnInit {
    @Input()
    currentNavIndex = 0;

    constructor(private service: MainScreenService, private scullyService: ScullyRoutesService) {}
    _projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
    projects$: Observable<Project[]> = this._projects.asObservable();

    _projectsMore: BehaviorSubject<Project[][]> = new BehaviorSubject<Project[][]>([]);
    projectsMore$: Observable<Project[][]> = this._projectsMore.asObservable();

    remains: Project[] = [];

    ngOnInit(): void {
        let links$ = this.scullyService.allRoutes$.pipe(
            map((scullyRoutes) => scullyRoutes.filter((scullyRoute) => scullyRoute.route.startsWith("/blog"))),
            map((scullyRoutes) => scullyRoutes.sort((postA, postB) => postA.priority - postB.priority)),
            map((scullyRoutes) =>
                scullyRoutes.map((routes) => {
                    console.log(routes);
                    routes.title = routes.title.replace("　", " ");
                    return routes;
                })
            ),
            share()
        );

        links$.subscribe((links) => {
            this._projects.next(this.scullyRouteTopProject(links.slice(0, 5)));
            this.remains = this.scullyRouteTopProject(links.slice(5));
        });
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
        let tripleProj = [];
        while (true) {
            let takeData = takeTwoRow.splice(0, 3);
            if (takeData.length == 0) {
                break;
            }
            for (let i = 3; i > takeData.length; i--) {
                takeData.push({ exist: false });
            }
            tripleProj.push(takeData);
        }
        let news = this._projectsMore.getValue().concat(tripleProj);
        this._projectsMore.next(news);
    }

    scullyRouteTopProject(scullyRoutes: ScullyRoute[]): Project[] {
        return scullyRoutes.map<Project>((scullyRoute) => {
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
}
