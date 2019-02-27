import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngxs/store";
import { environment } from "src/environments/environment";
import { FetchAuthor } from "../../actions";
import { skip } from "rxjs/operators";

@Component({selector:'dsod-author-bio', templateUrl:'./author.component.html', styleUrls:['./author.component.scss']})

export class DSODAuthorBioComponent implements OnInit{
  @Input() authorId:string;
  authorDetails:any;
  constructor(private store:Store){
   
  }
  ngOnInit(){
    this.store.dispatch(new FetchAuthor(this.authorId))
    this.store.select(state => state.shared.author).pipe(skip(1)).subscribe(res=>{
      this.authorDetails=res
    })
  }

  getUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }

}