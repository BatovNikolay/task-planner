import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  tascksAll = 15;
  tascksPlanned = 10;
  tascksOverdue = 5;
  tascksFinishing = 22;

  constructor() { }

  ngOnInit() {
  }

}
