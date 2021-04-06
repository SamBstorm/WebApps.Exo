import { ChronoSaveService } from './../Services/chrono-save.service';
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
  public get times() : RecordedTime[] {return this.chronoSave.times;}
  public get bestTime() : number{ return this.times.map(t=>t.time).sort((a,b)=>a-b)[0]??0}
  public isReorder : boolean = false;

  constructor(private alert : AlertController, private chronoSave : ChronoSaveService) { }

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

  saveTime(){
    this.chronoSave.addChrono({time: this.time, recordDate : new Date(), favorite : false});
    this.time = 0;
    console.log(this.times);
    
  }

  deleteTime(object : RecordedTime){
    const pipe = new TimerFormatPipe();
    this.alert.create({
      header : "Suppression",
      message : `Êtes-vous sûr de vouloir supprimer le temps ${pipe.transform(object.time)} ?`,
      buttons : ["Annuler",{
        text :"Supprimer",
        handler : ()=>{
          console.log(object)
          this.chronoSave.removeChrono(object);
        }
      }]
    }).then((a)=>a.present());
  }

  changeOrder(event:CustomEvent<ItemReorderEventDetail>){
    let start = event.detail.from ;
    let end = (event.detail.to>=this.times.length)?event.detail.to-1:event.detail.to;
    this.chronoSave.changeOrder(start, end);
    event.detail.complete();    
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
        this.chronoSave.toggleTimeFavorite(t);
        console.log(this.times);
      }
    }]
    }).then(a=>a.present());
  }

  reoderFavorite(){
    this.chronoSave.reorderFavorite();
  }

}
