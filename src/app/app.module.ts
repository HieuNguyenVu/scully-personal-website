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
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AppUpdateService } from "./app-update.service";

@NgModule({
    declarations: [AppComponent],
    imports: [
        ServiceWorkerModule,
        BrowserModule,
        AppRoutingModule,
        ScullyLibModule,
        BrowserAnimationsModule,
        MatTabsModule,
        HttpClientModule,
        FooterModule,
        NotFoundModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:5000'
        }),
    ],
    providers: [AppUpdateService],
    bootstrap: [AppComponent],
})
export class AppModule {}
