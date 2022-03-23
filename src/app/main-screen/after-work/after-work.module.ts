import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { FooterModule } from "@src/app/shared/footer/footer.module";
import { AfterWorkComponent } from "./after-work.component";
import { AfterWorkItemModule } from "./afterwork-item.module";

@NgModule({
    declarations: [AfterWorkComponent],
    imports: [CommonModule, FooterModule, MatTabsModule, MatChipsModule, MatAutocompleteModule, MatFormFieldModule, ReactiveFormsModule, AfterWorkItemModule],
    exports: [AfterWorkComponent],
})
export class AfterWorkModule {}
