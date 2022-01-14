import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { FooterModule } from "../shared/footer/footer.module";
import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./blog.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    declarations: [BlogComponent],
    providers: [],
    imports: [CommonModule, BlogRoutingModule, ScullyLibModule, MatTabsModule, FooterModule, MatSnackBarModule],
})
export class BlogModule {}
