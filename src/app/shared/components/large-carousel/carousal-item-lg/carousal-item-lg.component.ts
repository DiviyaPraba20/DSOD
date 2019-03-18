import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { CMSService } from "src/app/cms/services/cms.service";
import { Router } from "@angular/router";

@Component({ selector: 'dsod-carousal-lg-item', templateUrl: 'carousal-item-lg.component.html', styleUrls: ['./carousal-item-lg.component.scss']})

export class DSODCarousalItemLargeComponent implements OnInit{
  @Input() content:any;
  constructor(private cmsService:CMSService, private router:Router){}
  ngOnInit(){
  }
  onLearnMore(){
    this.cmsService.findAllContents({title:this.content.title,skip:0, limit:1}).subscribe(res=>{
      const data = res.resultMap.data;
      if(data.length){
        if (data[0].contentTypeName=='Podcasts'){
          this.router.navigate(['podcast', data[0].id]);
        }
        else{
          this.router.navigate(['article', data[0].id])
        }
      }
    })
  }
}
