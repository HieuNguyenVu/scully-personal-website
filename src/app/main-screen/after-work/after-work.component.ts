import { Component, Input, OnInit } from "@angular/core";
import { ScullyRoute, ScullyRoutesService } from "@scullyio/ng-lib";
import { Observable, of } from "rxjs";
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
    projects$: Observable<Project[]> = of([]);
    projectsMore$: Observable<Project[][]> = of([]);
    ngOnInit(): void {
        let links$ = this.scullyService.allRoutes$.pipe(
            map((scullyRoutes) => scullyRoutes.filter((scullyRoute) => scullyRoute.route.startsWith("/blog"))),
            map((scullyRoutes) => scullyRoutes.sort((postA, postB) => postA.priority - postB.priority)),
            map((scullyRoutes) =>
                scullyRoutes.map((routes) => {
                    routes.title = routes.title.replace("　", " ");
                    return routes;
                })
            ),
            share()
        );
        this.projects$ = links$.pipe(
            map((links) => links.slice(0, 5)),
            map((links) => this.scullyRouteTopProject(links))
        );
        this.projectsMore$ = links$.pipe(
            map((links) => links.slice(5)),
            map((links) => this.scullyRouteTopProject(links)),
            map((projects) => {
                let projs = projects;
                let tripleProj = [];
                while (true) {
                    let takeData = projs.splice(0, 3);
                    if (takeData.length == 0) {
                        break;
                    }
                    for (let i = 3; i > takeData.length; i--) {
                        takeData.push({ exist: false });
                    }
                    tripleProj.push(takeData);
                }
                return tripleProj;
            })
        );
    }

    scullyRouteTopProject(scullyRoutes: ScullyRoute[]): Project[] {
        return scullyRoutes.map<Project>((scullyRoute) => {
            return {
                title: scullyRoute.title.replace("<br>", " "),
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
