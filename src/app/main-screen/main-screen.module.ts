import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTabsModule } from "@angular/material/tabs";
import { AfterWorkComponent } from "./after-work/after-work.component";
import { AfterWorkItemComponent } from "./after-work/afterwork-item.component";
import { HelloComponent } from "./hello/hello.component";
import { MainRoutingModule } from "./main-screen-routing.module";
import { MainComponent } from "./main/main.component";
import { PortfolioItemComponent } from "./portfolio/portfolio-item.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
    declarations: [HelloComponent, MainComponent, PortfolioComponent, PortfolioItemComponent, AfterWorkComponent, AfterWorkItemComponent],
    imports: [CommonModule, MainRoutingModule, MatTabsModule, MatGridListModule, HttpClientModule, MatTooltipModule],
    providers: [],
})
export class MainScreenModule {}
