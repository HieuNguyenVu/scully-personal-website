import { Component, Input, OnInit } from "@angular/core";
import { Project } from "./project.model";

@Component({
    selector: "app-portfolio-item",
    template: `
    <div *ngIf="project && project[type]" [ngClass]="project.exist ? 'topic-container' : 'topic-container topic-container-invisible'">
        <div class="overlay">
            <div class="topic-image-container">
                <div class="topic-image" style="background-image: url('{{ project[type].image }}');"></div>
            </div>
            <div class="topic">
                <h3 class="title" matTooltip="{{ project.title }}" matTooltipClass="title-tooltip" [matTooltipShowDelay]="500">{{ project.title }}</h3>
                <div class="technologies" matTooltip="{{ project[type].technologies.join(' | ') }}" matTooltipClass="flex-tooltip" [matTooltipShowDelay]="500">
                    <ng-container *ngFor="let tech of project[type].technologies">
                        <label class="tag-item"
                            ><a href="#">#{{ tech }}</a></label
                        >
                    </ng-container>
                </div>
                <figure class="description" matTooltip="{{ project.description }}" matTooltipClass="normal-tooltip" [matTooltipShowDelay]="500">
                    {{ project.description }}
                </figure>
                <div class="topic-footer">
                    <div class="date">{{ project[type].date_end }}</div>
                    <span></span>
                    <ng-container *ngIf="type != 3 || min == 2; else type3">
                        <div class="topic-link">
                            <a *ngIf="project[type].demo" href="{{ project[type].demo }}" target="_blank">Demo</a>
                            <a *ngIf="project[type].source" href="{{ project[type].source }}" target="_blank">Source</a>
                            <a *ngIf="project[type].guide" href="{{ project[type].guide }}" target="_blank">Guide</a>
                        </div>
                    </ng-container>
                    <ng-template #type3>
                        <div class="topic-link">
                            <a *ngIf="project[type].demo" href="{{ project[type].demo }}" target="_blank">Demo</a>
                            <a *ngIf="project[type].guide" href="{{ project[type].guide }}" target="_blank">Client</a>
                            <a *ngIf="project[type].source" href="{{ project[type].source }}" target="_blank">Server</a>
                        </div>
                    </ng-template>
                </div>
            </div>
        </div>
    </div>`,
    styleUrls: ["./portfolio-item.component.scss"],
})
export class PortfolioItemComponent implements OnInit {
    constructor() {}
    type: number;
    min: number;
    @Input() project: Project;
    ngOnInit(): void {
        this.type = this.project.displayType;
        this.min = Math.min(...this.project.projectTypes);
    }
}
