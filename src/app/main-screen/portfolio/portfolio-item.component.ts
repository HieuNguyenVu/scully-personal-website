import { Component, Input, OnInit } from "@angular/core";
import { Project } from "./project.model";

@Component({
    selector: "app-portfolio-item",
    template: ` <div *ngIf="project" [ngClass]="project.exist ? 'topic-container' : 'topic-container topic-container-invisible'">
        <div class="overlay">
            <div class="topic-image-container">
                <div class="topic-image" style="background-image: url('{{ project.image }}');"></div>
            </div>
            <div class="topic">
                <h3 class="title" matTooltip="{{ project.title }}" matTooltipClass="title-tooltip" [matTooltipShowDelay]="500">{{ project.title }}</h3>
                <p class="description" matTooltip="{{ project.description }}" matTooltipClass="normal-tooltip" [matTooltipShowDelay]="500">
                    {{ project.description }}
                </p>
                <div class="topic-footer">
                    <div class="date">{{ project.date_start }} - {{ project.date_end }}</div>
                    <div class="topic-link">
                        <a href="{{ project.link }}" target="_blank">Link</a>
                        <a href="{{ project.link_source }}" target="_blank">Source</a>
                        <a href="{{ project.guide }}" target="_blank">Guide</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    styleUrls: ["./portfolio-item.component.scss"],
})
export class PortfolioItemComponent implements OnInit {
    constructor() {}
    @Input() project: Project;
    ngOnInit(): void {}
}
