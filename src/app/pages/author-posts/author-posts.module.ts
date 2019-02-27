import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AuthorPostsRoutingModule } from './author-posts-routing.module';
import { CMSModule } from '../../cms/cms.module';
import { SharedModule } from '../../shared/shared.module';
import { AUTHOR_CONTENTS_COMPONENTS } from './components';
import { AUTHOR_CONTENTS_CONTAINERS } from './containers';

@NgModule({
  imports: [
    CommonModule,
    AuthorPostsRoutingModule,
    TabsModule.forRoot(),
    SharedModule,
    CMSModule,
    NgxSpinnerModule,
  ],
  declarations: [
    ...AUTHOR_CONTENTS_COMPONENTS, ...AUTHOR_CONTENTS_CONTAINERS
  ]
})
export class AuthorPostsModule { }
