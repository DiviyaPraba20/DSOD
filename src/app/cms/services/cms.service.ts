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

@Injectable()
export class CMSService {
  isLoggedIn: Boolean;
  constructor(private http: HttpClient) {}

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
    this.isLoggedIn
      ? (url = 'findAllContents')
      : (url = 'public/findAllContents');
    return this.http.post<CMSResponse<CMSPageContent>>(
      `${environment.url}/content/public/findAllContents`,
      params
    );
  }

  findOneContents<T>(id: string) {
    let url = '';
    this.isLoggedIn
      ? (url = 'findOneContents')
      : (url = 'public/findOneContents');
    return this.http.post<CMSResponse<CMSPageContent>>(
      `${environment.url}/content/public/findOneContents?id=${id}`,
      {}
    );
  }

  trending<T>(params: CMSContentParams) {
    let url = '';
    this.isLoggedIn ? (url = 'trending') : (url = 'public/trending');
    return this.http.post<CMSResponse<CMSPageContent>>(
      `${environment.url}/content/public/trending`,
      params
    );
  }

  getAllSponsors<T>() {
    return this.http.post<CMSResponse<sponsors>>(
      `${environment.url}/sponsor/getAll`,
      {}
    );
  }

  findAllBySearch<T>(term: any) {
    return this.http.post<CMSResponse<CMSPageContent>>(
      `${environment.url}/content/public/findAllByValue`,
      term
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
