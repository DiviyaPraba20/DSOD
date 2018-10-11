import { Component } from '@angular/core';
import { Store } from '@ngxs/store'
import * as actions from "./actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "DSODDesktop";
  
  constructor(private store: Store) {
    store.dispatch(new actions.AppInit());
  }
}
