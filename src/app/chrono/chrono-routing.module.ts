import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChronoPage } from './chrono.page';

const routes: Routes = [
  {
    path: '',
    component: ChronoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChronoPageRoutingModule {}
