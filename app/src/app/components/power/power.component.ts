import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Icon } from './model';
import { Icons } from './models';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss'],
})
export class PowerComponent {
  dateTime: Date;
  icons: Icon[] = Icons;

  isSelected?;

  iconActive(item: Icon) {
    console.log(item);
    this.isSelected = item;
  }

  constructor() {
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    });
  }
}
