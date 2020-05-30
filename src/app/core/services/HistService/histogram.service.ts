import { Injectable } from '@angular/core';
import { Observable, interval, from, of, BehaviorSubject } from 'rxjs';
import {switchMap, flatMap, mergeMap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistogramService {
  cols = [
    'январь','февраль', 'март','апрель',
    'май','июнь', 'июль', 'август',
    'сентябрь','октябрь','ноябрь','декабрь'
  ]
  rows = [
    0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000
  ]

  histSubject = new BehaviorSubject(this.getRandomHistogram());
  initialized = false;
  constructor() { }

  private getRandomColumn(month: string, color: string) {
    return {
      value: Math.floor(Math.random() * 1000),
      background: color
    }
  }

  private getRandomHistogram() {
    let res = {
      buys: {
        cols: [],
        leftLegend: [],
        bottomLegend: []
      },
      sells: {
        cols: [],
        leftLegend: [],
        bottomLegend: []
      },
      ratio: {
        cols: [],
        leftLegend: [],
        bottomLegend: []
      }
    };

    res.buys.cols = this.cols.map( (col) => {
      return [this.getRandomColumn(col, '#ce6ba8')];
    });
    res.buys.leftLegend = this.rows;
    res.buys.bottomLegend = this.cols;

    res.sells.cols = this.cols.map( (col) => {
      return [this.getRandomColumn(col, '#6573ff')];
    });
    res.sells.leftLegend = this.rows;
    res.sells.bottomLegend = this.cols;

    res.ratio.cols = this.cols.map( (col, index) => {
      return [
        res.buys.cols[index][0], res.sells.cols[index][0]
      ]
    })
    res.ratio.leftLegend = this.rows;
    res.ratio.bottomLegend = this.cols;

    return res;
  }

  private startFlow() {
    interval(30000).pipe(
       map( () => {
         this.histSubject.next(this.getRandomHistogram());
       })
     ).subscribe()
  }

  public getHistFlow() {
    if (!this.initialized) {
      this.startFlow()
      this.initialized = true;
    }
    return this.histSubject;
  }
}
