import { Component, signal } from '@angular/core';

import { Lists } from "./component/lists/lists";
import { Students } from './component/students/students';
import { PostDashboard } from "./component/post-dashboard/post-dashboard";
@Component({
  selector: 'app-root',
  imports: [Lists, Students, PostDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone:true
})
export class App {
  protected readonly title = signal('ngForApp');
  // counter:number=10//just for normal understanding
  // onClick(){
  //  this.counter++
  // }

//signal

counter = signal(10)

onClick(){
  // this.counter.update((val)=>{
  //   return val+1
  // })
//parameter in update gives valuses in signals

  this.counter.set(1000)
}
}
