import { Component, OnInit } from '@angular/core';
import { PostCard } from "./post-card/post-card";
import { postData } from '../../const/post';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-dashboard',
  imports: [PostCard],
  templateUrl: './post-dashboard.html',
  styleUrl: './post-dashboard.scss',
})
export class PostDashboard {
  
  postsArr:Array<Ipost>=postData

  // ngOnInit(): void {
  //   console.log(this.postsArr);
    
  // }
  
}
