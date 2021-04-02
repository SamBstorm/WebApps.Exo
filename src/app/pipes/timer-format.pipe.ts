import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerFormat'
})
export class TimerFormatPipe implements PipeTransform {

  transform(value: number): string {
    let centiSeconds = value % 100;
    let seconds = ((value-centiSeconds)/100)%60;
    let minutes = (Math.floor(value/(100*60)));
    //return ((minutes<10)?"0"+minutes:minutes) + ":" + (seconds<10)?"0"+seconds:seconds) + ":"+(centiSeconds<10)?"0"+centiSeconds:centiSeconds);
    return `${(minutes<10)?`0${minutes}`:minutes}:${(seconds<10)?`0${seconds}`:seconds}:${(centiSeconds<10)?"0"+centiSeconds:centiSeconds}`;
  }

}
