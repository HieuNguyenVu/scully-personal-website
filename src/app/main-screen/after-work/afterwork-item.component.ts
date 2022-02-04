import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { Project } from "../portfolio/project.model";

@Component({
    selector: "app-afterwork-item",
    templateUrl: "afterwork-item.component.html",
    styleUrls: ["./afterwork-item.component.scss"],
})
export class AfterWorkItemComponent implements OnInit {
    @ViewChild("topicImage") topicImage: ElementRef<HTMLElement>;
    @Input() project: Project;

    constructor() {}
    ngOnInit(): void {
        this.topicImage.nativeElement.style.backgroundImage = `url('${this.project.image}')`;
    }
}
