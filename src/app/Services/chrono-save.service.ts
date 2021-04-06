import { RecordedTime } from './../models/recorded-time';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChronoSaveService {

  private _times : RecordedTime[];
  public get times() : RecordedTime[] {
    this._times = this.load() ?? [];
    return this._times;
  }
  private key : string = "chronos";
  constructor() {  }

  private save() : void{
    localStorage.setItem(this.key,JSON.stringify(this._times));
  }

  private load() : RecordedTime[]{
    return JSON.parse( localStorage.getItem(this.key) );
  }

  public addChrono(time : RecordedTime): void{
    this._times.push(time);
    this.save();
  }

  public removeChrono(time : RecordedTime): void{
    this._times = this._times.filter(t=> t.recordDate !== time.recordDate);
    console.log(this._times);
    this.save();
  }

  public changeOrder(start : number, end : number):void{
    if(start < end){
      for (let i = start; i < end; i++) {
        let temp = this._times[i+1];
        this._times[i+1] = this._times[i]
        this._times[i] = temp;
        console.log(`Exchange : ${i+1} and ${i}`);
        
      }
    } 
    else{                                                                      //[0,1,2,3,4,5,6] => start:4  - end:6
      for (let i = start; i > end; i--) {
        let temp = this._times[i-1];
        this._times[i-1] = this._times[i]
        this._times[i] = temp;
        console.log(`Exchange : ${i-1} and ${i}`);
      }
    }
    this.save();
  }

  toggleTimeFavorite(time: RecordedTime):void{
    this._times.find((t)=>t.recordDate == time.recordDate ).favorite = !this._times.find((t)=>t.recordDate == time.recordDate ).favorite;
    this.save();
  }

  public reorderFavorite(){
    this._times.sort((a,b)=>((b.favorite)?1:0)-((a.favorite)?1:0));
    this.save();
  }
}
