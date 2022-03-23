import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { Post } from "../portfolio/project.model";

@Component({
    selector: "app-afterwork-item",
    templateUrl: "afterwork-item.component.html",
    styleUrls: ["./afterwork-item.component.scss"],
})
export class AfterWorkItemComponent implements OnInit {
    @Input() post: Post;

    constructor() {}
    ngOnInit(): void {
    }
}
