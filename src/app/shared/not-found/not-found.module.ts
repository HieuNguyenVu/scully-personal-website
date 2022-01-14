import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { FooterModule } from "../footer/footer.module";
import { NotFoundComponent } from "./not-found.component";

@NgModule({
    declarations: [NotFoundComponent],
    imports: [MatTabsModule, FooterModule],
    exports: [NotFoundComponent],
    providers: [],
    bootstrap: [],
})
export class NotFoundModule {}
