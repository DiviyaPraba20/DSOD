import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DSODComment, CMSResponse } from 'src/app/cms/models';
import { environment } from '../../../environments/environment';
import { DSODContentAuthor } from '../models';

@Injectable({ providedIn: 'root' })
export class SharedService {
  url = environment.url;
  constructor(private http: HttpClient) {}

  addReview(comment: DSODComment) {
    return this.http.post<any>(
      `${environment.url}/comment/addComment`,
      comment,
      { withCredentials: true }
    );
  }

  findAllReview(body: any) {
    return this.http.post<CMSResponse<DSODComment>>(
      `${environment.url}/comment/findAllByContent`,
      body,
      { withCredentials: true }
    );
  }

  fetchAuthor(id: string) {
    return this.http.post<CMSResponse<DSODContentAuthor>>(
      `${environment.url}/author/findOneById?id=${id}`,
      {},
      { withCredentials: true }
    );
  }
}
