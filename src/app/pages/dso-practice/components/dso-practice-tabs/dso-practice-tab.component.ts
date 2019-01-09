import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { CMSContentTypeModel, CMSContentParams, CMSPageContent } from "src/app/cms/models";
import { Store } from "@ngxs/store";
import { FetchDSOPractices, ResetState } from "src/app/cms/actions";
import { Observable } from "rxjs";

@Component({
  selector: 'dsod-practice-page-tab',
  templateUrl: './dso-practice-tab.component.html',
  styleUrls: ['./dso-practice-tab.component.scss']
})
export class DSODPracticesTabComponent implements OnInit{
  @Input() contentTypeId:string
  @Input() DSOPracicesPost$: Observable<CMSPageContent[]>;
  params: CMSContentParams = {
    skip: 0,
    limit: 4
  };
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchDSOPractices({
        ...this.params,
      contentTypeId: this.contentTypeId
      }));
    this.DSOPracicesPost$ = this.store.select(state => state.cms.DSOPractices);
  }

}