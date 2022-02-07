import { AfterContentInit, AfterViewInit, Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit, AfterViewInit {
    constructor(private route: ActivatedRoute, private router: Router) {}
    navIndex: number = 0;
    defaultSelect: number = 0;
    ngOnInit(): void {
        console.log("WINDOW", window);

        let param = this.route.snapshot.queryParams;
        if (param && !isNaN(parseInt(param["index"]))) {
            this.defaultSelect = parseInt(param["index"]);
            this.router.navigate([], {
                queryParams: {
                    index: null,
                },
                queryParamsHandling: "merge",
            });
        }
    }
    ngAfterViewInit(): void {
        var elm = document.getElementById("mainTab").querySelector('div[tabindex="0"]') as HTMLElement;
        elm.focus();
    }

    tabChanged(tabChangeEvent: MatTabChangeEvent) {
        this.navIndex = tabChangeEvent.index;
    }
}
