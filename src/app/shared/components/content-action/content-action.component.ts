import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';

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
  @Input() isLoggedIn: boolean;

  userInfo: UserProfileData = null;

  constructor(
    private store: Store,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.store.select(state => state.auth.userInfo).subscribe(res => {
      this.userInfo = res;
    });
  }

  onChangeBookmark(isBookmark: boolean) {
    if (isBookmark) {
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
      url: window.location.href,
      status: '1'
    })).subscribe(res => {
      if (this.content.isBookmark) {
        this.toastr.success('This post has been bookmarked successfully!', 'Bookmark');
      } else {
        this.toastr.error('Bookmark action has been failed.', 'Bookmark');
      }
    });
  }

  removeBookmark() {
    this.store.dispatch(new RemoveBookmark({
      email: this.userInfo.email,
      contentId: this.content.id
    })).subscribe(res => {
      if (!this.content.isBookmark) {
        this.toastr.success('The bookmark has been removed successfully!', 'Bookmark');
      } else {
        this.toastr.error('User action has been failed.', 'Bookmark');
      }
    });
  }
}
