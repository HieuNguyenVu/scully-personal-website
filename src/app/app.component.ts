import { Component, OnInit } from "@angular/core";
import { AppUpdateService } from "./app-update.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    constructor(private updates: AppUpdateService) {
        this.updates.checkForUpdates();
    }
    ngOnInit(): void {}
}
