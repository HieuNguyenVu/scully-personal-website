import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { AfterWorkItemModule } from "../main-screen/after-work/afterwork-item.module";
import { FooterModule } from "../shared/footer/footer.module";
import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./blog.component";

@NgModule({
    declarations: [BlogComponent],
    providers: [],
    imports: [CommonModule, BlogRoutingModule, ScullyLibModule, FooterModule, AfterWorkItemModule, MatTabsModule, MatTooltipModule],
})
export class BlogModule {}
