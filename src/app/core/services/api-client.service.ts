import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApplicationStateService } from '../../app.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  constructor(
    private appService: ApplicationStateService,
    private http: HttpClient
  ) { }

  post(url: string, body: any | null, options?: any): Observable<any> {
    return this.http.post(url, body, options).pipe(
      takeUntil(this.appService._unsubscribeAll)
    );
  }
}
