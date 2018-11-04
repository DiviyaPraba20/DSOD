import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  CMSContentTypeModel,
  CMSContentParams,
  CMSResponse,
  CMSPageContent,
  sponsors
} from '../models';
import { Store } from '@ngxs/store';
import { skip, debounce } from 'rxjs/operators';
import { timer } from 'rxjs';
import { authState } from 'src/app/pages/auth/states';

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
    return this.http.post<CMSResponse<T>>(
      `${environment.url}/content/public/findOneContents`,
      {
        id
      }
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
}
