import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Input } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { MainScreenService } from '../main-screen.service';
import { Project } from './project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input()
  currentNavIndex = 0;

  constructor(private service: MainScreenService) { }
  listProjects: Project[][] = [];
  ngOnInit(): void {
    this.service.getProjectList<Project>().subscribe(res => {
      while (res.length > 0) {
        let chunk = res.splice(0, 2);
        this.listProjects.push(chunk);
      }
    });
  }
}
