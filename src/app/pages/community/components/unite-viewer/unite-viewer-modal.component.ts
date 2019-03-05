import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';
import { FetchUniteContent } from 'src/app/cms/actions';

@Component({
  selector: 'dsod-unite-magazine-viewer',
  templateUrl: './unite-viewer-modal.component.html',
  styleUrls: ['./unite-viewer-modal.component.scss']
})
export class DSODUniteMagazineViewerComponent implements OnInit, OnDestroy {
  @Input() magazineId: string;

  magazine: any;
  pageIndex = 0;
  storeSub: Subscription;

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.store.dispatch(new FetchUniteContent(this.magazineId));
    this.storeSub = this.store.select(state => state.cms.uniteContent).pipe(skip(1))
    .subscribe(magazine => {
      this.magazine = magazine;
    });
  }

  getImageUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }

  onNavigation(btnName: string) {
    const body = document.getElementById('viewer-body');
    body.scrollTop = 0;
    if (btnName === 'previous') {
      this.pageIndex -= 1;
    } else {
      this.pageIndex += 1;
    }
  }

  getIFrameCode(iFrame) {
    return this.sanitizer.bypassSecurityTrustHtml(iFrame);
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}
