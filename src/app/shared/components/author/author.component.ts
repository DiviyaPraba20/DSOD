import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import * as actions from '../../actions';
import { DSODContentAuthor } from '../../models';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'dsod-content-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class DSODContentAuthorComponent implements OnInit {
  @Input()
  authorId: string;
  author: DSODContentAuthor;
  constructor(private store: Store) {}
  ngOnInit() {
    this.store.dispatch(new actions.FetchAuthor(this.authorId));
    this.store
      .select(state => state.shared.author)
      .pipe(skip(1))
      .subscribe(author => {
        this.author = author;
      });
  }
}
