import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';
import * as actions from './actions';

@Component({
  selector: 'dsod-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'DSODDesktop';

  constructor(private store: Store) {
    store.dispatch(new actions.AppInit());
  }
}
