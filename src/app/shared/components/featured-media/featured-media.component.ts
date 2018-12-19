import { Input, Component, OnChanges } from "@angular/core";
import { CMSPageContent } from "src/app/cms/models";

@Component({
  selector:'dsod-feartured-media', templateUrl:'./featured-media.component.html', styleUrls:['./featured-media.component.scss']
})

export class DSODFeaturedMediaComponent implements OnChanges{
  @Input() featuredMedia:CMSPageContent

  ngOnChanges(){
    console.log(this.featuredMedia);
  }
}