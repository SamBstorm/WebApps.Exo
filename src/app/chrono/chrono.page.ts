import { RecordedTime } from './../models/recorded-time';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { TimerFormatPipe } from '../pipes/timer-format.pipe';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
})
export class ChronoPage implements OnInit {

  public time : number;
  public timer : any;
  public times : RecordedTime[];
  public get bestTime() : number{ return this.times.map(t=>t.time).sort((a,b)=>a-b)[0]??0}
  public isReorder : boolean = false;

  constructor(private alert : AlertController) { }

  ngOnInit() {
    this.time = 0;
    this.times = [];
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

  saveTime(){
    this.times.push({time: this.time, recordDate : new Date()})
    this.time = 0;
    console.log(this.times);
    
  }

  deleteTime(object : RecordedTime){
    this.alert.create({
      header : "Test",
      message : "Coucou",
      buttons : ["Bye bye!",{
        text :"Ciao!",
        handler : ()=>console.log(object)
      }]
    }).then((a)=>a.present());
    //this.times = this.times.filter(t=> t !== object);
  }

  changeOrder(event:CustomEvent<ItemReorderEventDetail>){
    console.log(event);
    let start = event.detail.from ;
    let end = (event.detail.to>=this.times.length)?event.detail.to-1:event.detail.to;
    console.log(`${start} - ${end}`);
    if(event.detail.from < event.detail.to){
      for (let i = start; i < end; i++) {
        let temp = this.times[i+1];
        this.times[i+1] = this.times[i]
        this.times[i] = temp;
        console.log(`Exchange : ${i+1} and ${i}`);
        
      }
    } 
    else{                                                                      //[0,1,2,3,4,5,6] => start:4  - end:6
      for (let i = start; i > end; i--) {
        let temp = this.times[i-1];
        this.times[i-1] = this.times[i]
        this.times[i] = temp;
        console.log(`Exchange : ${i-1} and ${i}`);
      }
    }
    event.detail.complete();
    console.log(this.times);
    
  }

  saveAsFavorite(){
    const pipe = new TimerFormatPipe();
    this.alert.create({
      header : "Wich make favorite",
      subHeader : "Choose the chrono :",
      inputs : this.times.map((t)=> ({type : "radio", label: pipe.transform(t.time), value : t })),
      buttons : ["Cancel",
    {
      text : "Save",
      handler: (t)=>{
        t.favorite = true;
        console.log(this.times);
      }
    }]
    }).then(a=>a.present());
  }

}
