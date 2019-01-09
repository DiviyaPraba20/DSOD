import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsod-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  careerImages = [
    { url: 'assets/images/Career1.jpg', title: 'Search', icon:'fa fa-search'},
    { url: 'assets/images/Career2.jpg', title: 'Me', icon:'fa fa-user' },
    { url: 'assets/images/Career3.jpg', title: 'Review', icon:'fa fa-file' },
    { url: 'assets/images/Career4.jpg', title: 'DSO Profiles', icon:'fa fa-user-circle' }
  ];
  constructor() {}

  ngOnInit() {}
}
