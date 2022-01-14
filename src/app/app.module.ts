import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterModule } from "./shared/footer/footer.module";
import { NotFoundModule } from "./shared/not-found/not-found.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ScullyLibModule, BrowserAnimationsModule, MatTabsModule, HttpClientModule, FooterModule, NotFoundModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
