import { Component, Input } from '@angular/core';

@Component({
  selector: 'dosd-filter-select',
  template: `
          <div class="form-group">
          <label for="">{{label}}</label>
          <select class="form-control" name="">
            <option>1</option>
          </select>
          </div>
          `,
  styleUrls: ['./filter-select.component.scss']
})
export class DSODFilterSelectComponent {
  @Input()
  label: string;
  constructor() {}
}
