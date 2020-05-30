import {Component, Input, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HistogramService} from '../../../core/services/HistService/histogram.service';
import {transition, trigger, state, style, animate} from '@angular/animations';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit {

  public leftLegend$;
  public bottomLegend$;
  public cols$;

  @Input() histData$: Observable<Object>

  constructor(private histogramService: HistogramService) { }

  ngOnInit(): void {
    this.histData$.pipe(
      map( (histData:any) => {
          this.leftLegend$ = of(histData.leftLegend);
          this.bottomLegend$ = of(histData.bottomLegend);
          this.cols$ = of(histData.cols);
        }
      )
    ).subscribe();
  }

}
