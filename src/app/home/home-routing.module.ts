import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  
  {
    path:'',
    component:HomePage,
    children:[
      {
        path:'',
        redirectTo:'chrono',
        pathMatch:'full'
      },
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'chrono',
        loadChildren: () => import('../chrono/chrono.module').then( m => m.ChronoPageModule)
      },
    ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
