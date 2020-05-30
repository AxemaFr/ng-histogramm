import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistogramComponent } from './layout/histogram/histogram.component';



@NgModule({
  declarations: [HistogramComponent],
  exports: [
    HistogramComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
