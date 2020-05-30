import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistogramService} from './services/HistService/histogram.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [HistogramService]
})
export class CoreModule { }
