import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MainScreenService } from '../main-screen.service';
import { Project } from '../portfolio/project.model';

@Component({
  selector: 'app-afterwork-item',
  template: `
  <div *ngIf="project && project.exist" class="topic-container" >
      <div class="topic-image" style="background-image: url('{{project.image}}');">
      </div>
      <div class="topic">
          <h3 class="title">{{project.title}}</h3>
          <p class="description">
              {{project.description}}
          </p>
          <div class="topic-footer">
              <div class="date">
                  {{project.date_start}} - {{project.date_end}}
              </div>
              <div class="topic-link">
                  <a href="{{project.link}}" target="_blank">Read More</a>
              </div>
          </div>
      </div>
  </div>`,
  styleUrls: ['./afterwork-item.component.scss']
})
export class AfterWorkItemComponent implements OnInit {

  constructor() { }
  @Input() project: Project;
  ngOnInit(): void {
  }
}
