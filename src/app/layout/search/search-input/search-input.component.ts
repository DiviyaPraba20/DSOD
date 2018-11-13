import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  Input,
  OnChanges
} from '@angular/core';
import { Store, Actions } from '@ngxs/store';
import { debounceTime, skip } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import * as actions from '../../../cms/actions';
import { Observable } from 'rxjs';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-search',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class DSODSearchComponent implements OnInit, OnChanges {
  @Input() isOpen: boolean;
  searchForm: FormGroup = new FormGroup({
    searchTerm: new FormControl()
  });
  searchValue: string;
  params: CMSPageContent;
  constructor(private store: Store) {}
  ngOnInit() {
    this.searchForm.controls.searchTerm.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.searchValue = value;
      });
  }

  ngOnChanges() {
    if (!this.isOpen) {
      this.searchForm.reset();
    }
  }
}
