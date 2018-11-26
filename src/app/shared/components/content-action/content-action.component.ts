import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';

import { CMSPageContent } from '../../../cms/models/cms.models';
import { UserProfileData } from '../../../layout/profile/models/userProfile';
import { AddBookmark, RemoveBookmark } from '../../../cms/actions/cms.actions';

@Component({
  selector: 'dsod-content-actions',
  templateUrl: './content-action.component.html',
  styleUrls: ['./content-action.component.scss']
})
export class DSODContentActionComponent implements OnInit {
  @Input() content: CMSPageContent;

  userInfo: UserProfileData = null;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    console.log(this.content);
    this.store.select(state => state.auth.userInfo).subscribe(res => {
      this.userInfo = res;
    });
  }

  onChangeBookmark(isBookmark: boolean) {
    if (!isBookmark) {
      this.addBookmark();
    } else {
      this.removeBookmark();
    }
  }

  addBookmark() {
    this.store.dispatch(new AddBookmark({
      email: this.userInfo.email,
      title: this.content.title,
      postId: this.content.id,
      categoryId: this.content.categoryId,
      contentTypeId: this.content.contentTypeId,
      url: 'http://www.dsodentist.com',
      status: '1'
    })).subscribe(res => {
      console.log(res);
    });
  }

  removeBookmark() {
    this.store.dispatch(new RemoveBookmark(this.content.id));
  }
}
