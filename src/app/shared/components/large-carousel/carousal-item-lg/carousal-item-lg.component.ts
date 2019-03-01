import { Component, Input, OnInit } from "@angular/core";

@Component({ selector: 'dsod-carousal-lg-item', templateUrl: 'carousal-item-lg.component.html', styleUrls: ['./carousal-item-lg.component.scss']})

export class DSODCarousalItemLargeComponent implements OnInit{
  @Input() content:any;
  constructor(){}
  ngOnInit(){}
}