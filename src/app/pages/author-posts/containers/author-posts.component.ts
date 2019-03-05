import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'dsod-author-posts',
  templateUrl: './author-posts.component.html',
  styleUrls: ['./author-posts.component.scss']
})
export class DSODAuthorPostsComponent implements OnInit {
  bannerImages = ['sponsor-1.jpg', 'sponsor-2.jpg', 'sponsor-3.jpg']
  caption = 'Engaging education, anywhere'
  constructor(){}
  ngOnInit(){
    
  }
  
}
