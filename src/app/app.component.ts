import {Component, OnInit} from '@angular/core';
import {HistogramService} from './core/services/HistService/histogram.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-gistogram';
  buysData$;
  sellsData$;
  ratioData$;


  constructor(private histService: HistogramService) {
  }
  ngOnInit(): void {
    this.buysData$ = this.histService.getHistFlow().pipe(
      map((histData: any) => {
        console.log(histData.buys)
        return histData.buys
    }));
    this.sellsData$ = this.histService.getHistFlow().pipe(
      map((histData: any) => {
        console.log(histData.sells);
        return histData.sells
      }));
    this.ratioData$ = this.histService.getHistFlow().pipe(
      map((histData: any) => {
        console.log(histData.ratio)
        return histData.ratio
      }));
  }
}
