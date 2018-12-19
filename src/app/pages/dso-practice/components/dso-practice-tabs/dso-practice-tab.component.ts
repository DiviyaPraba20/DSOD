import { Component, Input, OnInit } from "@angular/core";
import { CMSContentTypeModel, CMSContentParams, CMSPageContent } from "src/app/cms/models";
import { Store } from "@ngxs/store";
import { FetchDSOPractices } from "src/app/cms/actions";
import { Observable } from "rxjs";

@Component({
  selector: 'dsod-practice-page-tab',
  templateUrl: './dso-practice-tab.component.html',
  styleUrls: ['./dso-practice-tab.component.scss']
})
export class DSODPracticesTabComponent implements OnInit {
  @Input() contentType: CMSContentTypeModel[];
  @Input() DSOPracicesPost$: Observable<CMSPageContent[]>;
  params: CMSContentParams = {
    skip: 0,
    limit: 4
  };
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchDSOPractices({
        ...this.params,
        contentTypeId: this.contentType[0] ? this.contentType[0].id : null
      }));
    this.DSOPracicesPost$ = this.store.select(state => state.cms.DSOPractices);
  }
}