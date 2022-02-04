import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../portfolio/project.model";

@Component({
    selector: "app-afterwork-item",
    templateUrl: "afterwork-item.component.html",
    styleUrls: ["./afterwork-item.component.scss"],
})
export class AfterWorkItemComponent implements OnInit {
    @ViewChild("topicImage") topicImage: ElementRef<HTMLElement>;
    project: Project;

    constructor() {}
    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes.project);
        this.topicImage.nativeElement.style.backgroundImage = `url('${(<Project>changes.project).image}')`;
    }
}
