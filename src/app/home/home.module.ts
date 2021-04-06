import { ChronoPageModule } from './../chrono/chrono.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AccueilPageModule } from '../accueil/accueil.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AccueilPageModule,
    ChronoPageModule
  ],
  declarations: [HomePage],
  bootstrap : [HomePage]
})
export class HomePageModule {}
