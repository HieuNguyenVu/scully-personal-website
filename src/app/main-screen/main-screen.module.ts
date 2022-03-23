import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FooterModule } from "../shared/footer/footer.module";
import { AfterWorkModule } from "./after-work/after-work.module";
import { HelloComponent } from "./hello/hello.component";
import { MainRoutingModule } from "./main-screen-routing.module";
import { MainComponent } from "./main/main.component";
import { PortfolioItemComponent } from "./portfolio/portfolio-item.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

@NgModule({
    declarations: [HelloComponent, MainComponent, PortfolioComponent, PortfolioItemComponent],
    imports: [
        CommonModule,
        MainRoutingModule,
        MatTabsModule,
        HttpClientModule,
        MatTooltipModule,
        FooterModule,
        MatExpansionModule,
        AfterWorkModule,
    ],
    providers: [],
})
export class MainScreenModule {}
