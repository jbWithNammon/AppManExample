import { Component } from '@angular/core';
import { AppSettingsService } from '../app.setting.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  constructor(private appsetting:AppSettingsService){
    this.appsetting.getSettings().subscribe(res=>{
      console.log(res);
    });
console.log();
  }
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
