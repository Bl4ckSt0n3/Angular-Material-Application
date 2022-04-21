import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 2 },
        { title: 'Card 5', cols: 2, rows: 1 }
      ];
    })
  );

  cardsMini = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );
  breakpointMini!: number;
  breakpoint!: number;
  
  // cardLayout = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(
  //   map(({ matches }) => {
  //     if(matches) {
  //       return {
  //         columns: 1,
  //         miniCard: { cols: 1, rows: 1 },
  //         chart: { cols: 1, rows: 2 },
  //         table: { cols: 1, rows: 4 },
  //       };
  //     }
  //     return {
  //       columns: 4,
  //       miniCard: { cols: 1, rows: 1 },
  //       chart: { cols: 2, rows: 2 },
  //       table: { cols: 4, rows: 4 },
  //     };
  //   })
  // );

  onResize(event: any) {
    this.breakpointMini = (event.target.innerWidth <= 400) ? 1 : 4;
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2
  }
  constructor(
    private breakpointObserver: BreakpointObserver
  ) { 
    this.breakpointMini = (window.innerWidth <= 400) ? 1 : 4;
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }
}
