import { ChronoSaveService } from './../Services/chrono-save.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  public isActive : boolean = true;
  public get nbTimes(): number {return this.chronos.times.length;}

  constructor(private chronos : ChronoSaveService) { }

  ngOnInit() {
  }

  public toggleIsActive() : void{
      this.isActive = ! this.isActive;
  }

}
