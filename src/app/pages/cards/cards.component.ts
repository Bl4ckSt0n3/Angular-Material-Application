import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  options: string[] = [
    "Pipe",
    "Solar Panel",
    "Electric",
    "Other Materials",
    "Wood",
    "Cement"
  ];

  sort: string[] = [
    "Price Ascending",
    "Price Descending"
  ];
  breakpoint!: number;
  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 480) ? 1 : 4;
  }
  constructor() { 
    this.breakpoint = (window.innerWidth <= 480) ? 1 : 4;
  }
  // https://stackblitz.com/edit/stackoverflow-responsive-grid-flex-layout-and-mat-card-w-aab1xn?file=app%2Fcard-overview-example.html
  // https://zoaibkhan.com/blog/create-a-responsive-card-grid-in-angular-using-flex-layout-part-1/
  ngOnInit(): void {
  }

}
