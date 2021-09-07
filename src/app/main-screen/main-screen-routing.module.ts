import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AfterWorkComponent } from './after-work/after-work.component';
import { HelloComponent } from './hello/hello.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
