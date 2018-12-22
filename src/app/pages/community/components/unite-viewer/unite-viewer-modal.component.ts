import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { FetchUniteContent } from 'src/app/cms/actions';
import { skip } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dsod-unite-magazine-viewer',
  templateUrl: './unite-viewer-modal.component.html',
  styleUrls: ['./unite-viewer-modal.component.scss']
})
export class DSODUniteMagazineViewerComponent implements OnInit, OnDestroy {
  @Input() magazineId: string;
  magazine: any;
  pageIndex = 0;
  storeSub:Subscription
  constructor(public activeModal: NgbActiveModal, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchUniteContent(this.magazineId));
    this.storeSub=this.store
      .select(state => state.cms.uniteContent)
      .pipe(skip(1))
      .subscribe(magazine => {
        this.magazine = magazine
      });
  }

  getImageUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
  onNavigation(btnName: string) {
    let body=document.getElementById('viewer-body');
    body.scrollTop=0;
    if (btnName == 'previous') this.pageIndex -= 1;
    else {
      this.pageIndex += 1;
    }
  }

  ngOnDestroy(){
    this.storeSub.unsubscribe();
  }
}
