import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  Input,
  OnChanges
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'dsod-search',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class DSODSearchComponent implements OnChanges {
  @Input() isOpen: boolean;
  searchForm: FormGroup = new FormGroup({
    searchTerm: new FormControl()
  });
  constructor() {}

  ngOnChanges() {
    if (!this.isOpen) {
      this.searchForm.reset();
    }
  }
}
