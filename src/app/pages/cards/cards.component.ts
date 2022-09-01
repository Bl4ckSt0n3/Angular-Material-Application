import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';

export interface Card {
  text: string,
  title: string,
  price: number,
  category: string
}
const DATA: Card[] = [
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0 Card title 0 Card title 0 Card title 0",
    price: 100,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 86.90,
    category: "Pipe"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 67.25,
    category: "Wood"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 3.57,
    category: "Electric"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 41.90,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 99.90,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 71.50,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 60.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 32.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 32.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 32.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 32.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 32.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 32.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 32.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 32.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 60.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 19.90,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 49.90,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 352.90,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 34.00,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 11.45,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 7.25,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 26.75,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 42.35,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 17.99,
    category: "Steel"
  },
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    title: "Card title 0",
    price: 21.00,
    category: "Steel"
  },
];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA);
  gridColumns: number = 4;
  categoryModel: string = "All Product"
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

  changeGridColumn(column: number) {
    this.gridColumns = column;
  }

  // breakpoint!: number;
  // onResize(event: any): void {
  //   this.breakpoint = (event.target.innerWidth <= 480) ? 1 : 4;
  // }

  constructor(private changeDetectorRef: ChangeDetectorRef) { 
    // this.breakpoint = (window.innerWidth <= 480) ? 1 : 4;
  }
  // https://stackblitz.com/edit/stackoverflow-responsive-grid-flex-layout-and-mat-card-w-aab1xn?file=app%2Fcard-overview-example.html
  // https://zoaibkhan.com/blog/create-a-responsive-card-grid-in-angular-using-flex-layout-part-1/
  // https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
  // https://fontawesomeicons.com/materialdesign/icons/view_comfy
  // https://careydevelopment.us/blog/how-to-add-a-responsive-form-in-your-angular-app
  // https://stackblitz.com/angular/dnbermjydavk?file=app%2Ftable-overview-example.ts
  // https://www.spurtcommerce.com/angularjs-shopping-ecommerce-site-features
  // https://stackblitz.com/edit/flex-layout-angular-material-gxew4y?embed=1&file=app/app.component.html
  // https://dev.to/codingcatdev/angular-material-router-outlet-3292
  // https://blog.thoughtram.io/angular/2017/05/23/custom-themes-with-angular-material.html
  ngOnInit(): void {
    // this.currentItemsToShow = this.items;
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }
  ngOnDestroy(): void {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

}
