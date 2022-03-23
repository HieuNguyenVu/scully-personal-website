import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AfterWorkItemComponent } from "./afterwork-item.component";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
    declarations: [AfterWorkItemComponent],
    imports: [CommonModule, MatTooltipModule],
    exports: [AfterWorkItemComponent],
})
export class AfterWorkItemModule {}
