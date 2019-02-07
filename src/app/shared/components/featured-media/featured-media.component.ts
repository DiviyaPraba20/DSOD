import { Input, Component} from "@angular/core";
import { DSODFeaturedMedia } from "src/app/cms/models";
import { environment } from "src/environments/environment";

@Component({
  selector:'dsod-feartured-media', templateUrl:'./featured-media.component.html', styleUrls:['./featured-media.component.scss']
})

export class DSODFeaturedMediaComponent{
  @Input() featuredMedia: DSODFeaturedMedia

 getUrl(id){
   return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
 }
}