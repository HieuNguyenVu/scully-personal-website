import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../portfolio/project.model';

@Component({
  selector: 'app-afterwork-item',
  templateUrl: 'afterwork-item.component.html',
  styleUrls: ['./afterwork-item.component.scss']
})
export class AfterWorkItemComponent implements OnInit {

  constructor() { }
  @Input() project: Project;
  ngOnInit(): void {
  }
}
