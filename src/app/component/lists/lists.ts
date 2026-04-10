import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-lists',
  imports: [NgClass],
  templateUrl: './lists.html',
  styleUrl: './lists.scss',
})
export class Lists {
   skills:Array<string> = ["HTML","CSS","JS","Angular","NgRx"]
}
                                                                                                                                                                                                  