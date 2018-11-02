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

@Injectable()
export class CMSService {
  constructor(private http: HttpClient) {}
  endpoint: string;

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
    return this.http.post<CMSResponse<CMSPageContent>>(
      `${environment.url}/content/public/findAllContents`,
      params
    );
  }

  findOneContents<T>(id: string) {
    return this.http.post<CMSResponse<T>>(
      `${environment.url}/content/findOneContents`,
      { id }
    );
  }

  trending<T>(params: CMSContentParams) {
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
