import { Component, OnInit } from '@angular/core';
// import { Timeout } from '';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
})
export class ChronoPage implements OnInit {

  public time : number;
  public timer : any;

  constructor() { }

  ngOnInit() {
    this.time = 0;
  }

  startTimer(){
    this.timer = setInterval(()=>this.time++,10);
  }

  stopTimer(){
    clearInterval(this.timer);
    this.timer = undefined;    
  }

  resetTimer(){
    this.stopTimer();
    this.time = 0;
  }

}
