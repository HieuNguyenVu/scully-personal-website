import { AfterContentInit, AfterViewInit, Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
    navIndex: number = 0;
    defaultSelect: number = 0;
    constructor(private route: ActivatedRoute, private router: Router) {
        let param = this.route.snapshot.queryParams;
        if (param && !isNaN(parseInt(param["index"]))) {
            this.defaultSelect = parseInt(param["index"]);
            this.navIndex = this.defaultSelect;
            this.router.navigate([], {
                queryParams: {
                    index: null,
                },
                queryParamsHandling: "merge",
            });
        }
    }

    ngOnInit(): void {
    }

    tabChanged(tabChangeEvent: MatTabChangeEvent) {
        this.navIndex = tabChangeEvent.index;
    }
}
