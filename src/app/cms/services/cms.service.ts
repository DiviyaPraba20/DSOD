import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Bookmark } from '../models/cms.models';
import {
  CMSContentTypeModel,
  CMSContentParams,
  CMSResponse,
  CMSPageContent,
  sponsors
} from '../models';
import { Store } from '@ngxs/store';
import { state } from '@angular/animations';
import { AuthState } from 'src/app/pages/auth/states/auth.state';

@Injectable()
export class CMSService {
  constructor(private http: HttpClient, private store: Store) {}

  findAllCategory() {
    return this.http.post<CMSResponse<CMSContentTypeModel>>(
      `${environment.url}/category/findAllCategory`,
      {}
    );
  }

  findAllContentType() {
    return this.http.post<CMSResponse<CMSContentTypeModel>>(
      `${environment.url}/category/findAllContentType`,
      {}
    );
  }

  findAllContents<T>(params: CMSContentParams) {
    let url = '';
    const isLoggedIn = this.store.selectSnapshot<boolean>(AuthState.isLoggedIn);
    isLoggedIn ? (url = 'findAllContents') : (url = 'public/findAllContents');
    return this.http.post<CMSResponse<CMSPageContent>>(
      `${environment.url}/content/${url}`,
      params,
      isLoggedIn ? { withCredentials: true } : {}
    );
  }

  findOneContents<T>(id: string) {
    let url = '';
    const isLoggedIn = this.store.selectSnapshot<boolean>(AuthState.isLoggedIn);
    isLoggedIn ? (url = 'findOneContents') : (url = 'public/findOneContents');
    return this.http.post<CMSResponse<CMSPageContent>>(
      `${environment.url}/content/${url}?id=${id}`,
      {},
      isLoggedIn ? { withCredentials: true } : {}
    );
  }

  trending<T>(params: CMSContentParams) {
    let url = '';
    const isLoggedIn = this.store.selectSnapshot<boolean>(AuthState.isLoggedIn);
    isLoggedIn ? (url = 'trending') : (url = 'public/trending');
    return this.http.post<CMSResponse<CMSPageContent>>(
      `${environment.url}/content/${url}`,
      params,
      isLoggedIn ? { withCredentials: true } : {}
    );
  }

  getAllSponsors<T>() {
    return this.http.post<CMSResponse<sponsors>>(
      `${environment.url}/sponsor/getAll`,
      {}
    );
  }

  findAllBySearch<T>(term: any) {
    let url = '';
    const isLoggedIn = this.store.selectSnapshot<boolean>(AuthState.isLoggedIn);
    isLoggedIn ? (url = 'public/findAllByValue') : (url = 'findAllByValue');
    return this.http.post<CMSResponse<CMSPageContent>>(
      `${environment.url}/content/${url}`,
      term,
      isLoggedIn ? { withCredentials: true } : {}
    );
  }

  addBookmark(payload: Bookmark): Observable<Response> {
    const url = `${environment.url}/bookmark/save`;
    return this.http.post<Response>(url, payload, {withCredentials: true});
  }

  removeBookmark(payload: string): Observable<Response> {
    const url = `${environment.url}/bookmark/deleteOneById?id=${payload}`;
    return this.http.post<Response>(url, {}, {withCredentials: true});
  }
}
