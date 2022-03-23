import { Injectable } from "@angular/core";
import { ScullyRoute, ScullyRoutesService } from "@scullyio/ng-lib";
import { Observable } from "rxjs";
import { map, share } from "rxjs/operators";
import { Post } from "../main-screen/portfolio/project.model";

@Injectable({
    providedIn: "root",
})
export class PostsService {
    links$: Observable<ScullyRoute[]> = null;
    posts$: Observable<Post[]> = null;
    tags$: Observable<String[]> = null;

    constructor(private scullyService: ScullyRoutesService) {
        this.links$ = this.scullyService.allRoutes$.pipe(
            map((scullyRoutes) => scullyRoutes.filter((scullyRoute) => scullyRoute.route.startsWith("/blog"))),
            map((scullyRoutes) => scullyRoutes.sort((postA, postB) => postA.priority - postB.priority)),
            map((scullyRoutes) =>
                scullyRoutes.map((routes) => {
                    // console.log(routes);
                    routes.title = routes.title.replace("　", " ");
                    return routes;
                })
            )
        );
        this.posts$ = this.links$.pipe(map((links) => this.scullyRoute2Project(links)));
        this.tags$ = this.posts$.pipe(
            map((posts) => {
                let tags = posts.map((post) => post.tags).flat();
                return [...new Set(tags)];
            })
        );
    }

    getPosts(limit: number, mode: number): Observable<Post[]> {
        if (mode === 2)
            return this.posts$.pipe(
                map((posts) => {
                    posts = posts.sort((a, b) => a.priority - b.priority);
                    return posts.slice(0, limit);
                })
            );
        if (mode === 1)
            return this.posts$.pipe(
                map((posts) => {
                    posts = posts.filter((post) => post.type_index === undefined || (post.type_index !== undefined && post.type_index === mode)).sort((a, b) => a.priority - b.priority);
                    return posts.slice(0, limit);
                })
            );
        if (mode === 0)
            return this.posts$.pipe(
                map((posts) => {
                    posts = posts.filter((post) => post.type_index !== undefined && post.type_index === mode).sort((a, b) => a.priority - b.priority);
                    return posts.slice(0, limit);
                })
            );
    }

    getTags(limit: number): Observable<String[]> {
        return this.tags$.pipe(map((posts) => posts.slice(0, limit)));
    }

    /**
     * Convert Scully routes to Project
     * @param scullyRoutes
     * @returns
     */
    scullyRoute2Project(scullyRoutes: ScullyRoute[]): Post[] {
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
                type_index: scullyRoute.type_index
            };
        });
    }
}
