import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChronoPageRoutingModule } from './chrono-routing.module';

import { ChronoPage } from './chrono.page';
import { TestPipe } from '../pipes/test.pipe';
import { TimerFormatPipe } from '../pipes/timer-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChronoPageRoutingModule
  ],
  declarations: [ChronoPage, TimerFormatPipe, TestPipe]
})
export class ChronoPageModule {}
