import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  public isActive : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleIsActive() : void{
      this.isActive = ! this.isActive;
  }

}
