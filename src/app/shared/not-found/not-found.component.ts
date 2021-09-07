import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    let index = tabChangeEvent.index;
    switch (index) {
      case 0:
        this.router.navigateByUrl('/?index=0');
        break;
      case 1:
        this.router.navigateByUrl('/?index=1');
        break;
      case 2:
        this.router.navigateByUrl('/?index=2');
        break;
    }
  }
}
