import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@Injectable()
export class BlogGuard implements CanActivate {
  constructor(private router: Router, private scully: ScullyRoutesService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(state.url.endsWith('sitemap-blog.xml')) return true;
    if (!route.firstChild || Object.keys(route.firstChild.params).length == 0) {
      this.router.navigateByUrl('/404');
      return false;
    } else {
      let url = state.url.replace(/\?.*/, "");
      this.scully.allRoutes$.subscribe(routes => {
        if (!routes.map(rout => rout.route).includes(url)) {
          this.router.navigateByUrl('/404');
          return false;
        }
      });
    }
    return true;
  }
}

@Injectable()
export class MainGuard implements CanActivate {
  constructor(private router: Router, private scully: ScullyRoutesService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let url = state.url.replace(/\?.*$/,'');
    this.scully.allRoutes$.subscribe(routes => {
      if (!routes.map(rout => rout.route).includes(url)) {
        this.router.navigateByUrl('/404');
        return false;
      }
    });
    return true;
  }
}

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./main-screen/main-screen.module').then(m => m.MainScreenModule),
    canActivate: [MainGuard],
    pathMatch: 'full'
  },
  {
    path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
    canActivate: [BlogGuard]
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  providers: [BlogGuard, MainGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
