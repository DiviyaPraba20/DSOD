import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Bookmark, UniteMagazine } from '../models/cms.models';
import {
  CMSContentTypeModel,
  CMSContentParams,
  CMSResponse,
  CMSPageContent,
  Sponsor,
  RemoveBookmarkPayload
} from '../models';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/pages/auth/states/auth.state';
import { ApiClientService } from '../../core/services/api-client.service';

@Injectable()
export class CMSService {
  constructor(private http: ApiClientService, private store: Store) {}

  findAllCategory() {
    return this.http.post(
      `${environment.url}/category/findAllCategory`,
      {}
    );
  }

  findAllContentType() {
    return this.http.post(
      `${environment.url}/category/findAllContentType`,
      {}
    );
  }

  findAllContents<T>(params: CMSContentParams) {
    let url = '';
    const isLoggedIn = this.store.selectSnapshot<boolean>(AuthState.isLoggedIn);
    isLoggedIn ? (url = 'findAllContents') : (url = 'public/findAllContents');
    return this.http.post(
      `${environment.url}/content/${url}`,
      params,
      isLoggedIn ? { withCredentials: true } : {}
    );
  }

  findOneContents<T>(id: string, isPreview?: boolean) {
    if (isPreview) {
      return this.http.post(
        `${environment.url}/content/public/findOneContents?id=${id}`,
        {}
      );
    }
    let url = '';
    const isLoggedIn = this.store.selectSnapshot<boolean>(AuthState.isLoggedIn);
    isLoggedIn ? (url = 'findOneContents') : (url = 'public/findOneContents');
    return this.http.post(
      `${environment.url}/content/${url}?id=${id}`,
      {},
      isLoggedIn ? { withCredentials: true } : {}
    );
  }

  trending<T>(params: CMSContentParams) {
    let url = '';
    const isLoggedIn = this.store.selectSnapshot<boolean>(AuthState.isLoggedIn);
    isLoggedIn ? (url = 'trending') : (url = 'public/trending');
    return this.http.post(
      `${environment.url}/content/${url}`,
      params,
      isLoggedIn ? { withCredentials: true } : {}
    );
  }

  getAllSponsors<T>() {
    return this.http.post(
      `${environment.url}/sponsor/getAll`,
      {}
    );
  }

  findAllBySearch<T>(term: any) {
    let url = '';
    const isLoggedIn = this.store.selectSnapshot<boolean>(AuthState.isLoggedIn);
    isLoggedIn ? (url = 'findAllByValue') : (url = 'public/findAllByValue');
    return this.http.post(
      `${environment.url}/content/${url}`,
      { ...term, categoryName: 'Dental Public Health' },
      isLoggedIn ? { withCredentials: true } : {}
    );
  }

  addBookmark(payload: Bookmark): Observable<Response> {
    const url = `${environment.url}/bookmark/save`;
    return this.http.post(url, payload, { withCredentials: true });
  }

  removeBookmark(payload: RemoveBookmarkPayload): Observable<Response> {
    let params = new HttpParams();
    params = params.set('email', payload.email);
    params = params.set('contentId', payload.contentId);
    const url = `${environment.url}/bookmark/deleteOneByEmailAndContentId`;
    return this.http.post(url, null, {
      params,
      withCredentials: true
    });
  }

  findAllMagazine(payload: CMSContentParams): Observable<CMSResponse<UniteMagazine>> {
    const isLoggedIn = this.store.selectSnapshot<boolean>(AuthState.isLoggedIn);
    const url = `${environment.url}/magazine/findAll`;
    return this.http.post(url, payload, { withCredentials: true });
  }

  findOneMagazine(id: string): Observable<CMSResponse<any>> {
    const url = `${environment.url}/magazine/findOneById?id=${id}`;
    return this.http.post(url, null, { withCredentials: true });
  }

  getVisualEssay(id: string): Observable <any> {
    const url = `${environment.url}/content/visualEssay/findOneById`;
    const form = new FormData();
    form.append('id', id);
    return this.http.post(url, form);
   }
}
