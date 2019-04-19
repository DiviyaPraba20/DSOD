import { Component, OnInit } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { FetchUnites, FetchUniteContent, FetchUnitesSuccess, FetchUniteContentSuccess } from 'src/app/cms/actions';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { CMSResponse, UniteMagazine } from 'src/app/cms/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DSODUniteMagazineViewerComponent } from '../../components/unite-viewer/unite-viewer-modal.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'dsod-unite-magazine',
  templateUrl: './unite-magazine.component.html',
  styleUrls: ['./unite-magazine.component.scss']
})
export class DSODUniteMagazinePageComponent implements OnInit {
  uniteMagazines$: Observable<CMSResponse<UniteMagazine[]>>;

  constructor(
    private store: Store,
    private modalService: NgbModal,
    private actions$: Actions,
    private spinnerService: NgxSpinnerService
  ) {
    // this.store.dispatch(new FetchUnites({ skip: 0, limit: 10 }));
  }

  ngOnInit() {
    this.spinnerService.show();
    this.uniteMagazines$ = this.store.select(state => state.cms.uniteMagzazines);

    this.actions$.pipe(ofActionDispatched(FetchUnites, FetchUniteContent)).subscribe(data => {
      this.spinnerService.show();
    });

    this.actions$.pipe(ofActionDispatched(FetchUnitesSuccess, FetchUniteContentSuccess))
    .subscribe(data => {
      this.spinnerService.hide();
    });
  }

  getCoverUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }

  openMagazineViewer(id: string) {
    const modalRef = this.modalService.open(DSODUniteMagazineViewerComponent, { windowClass: 'viewer-modal' });
    modalRef.componentInstance.magazineId = id;
  }
}
