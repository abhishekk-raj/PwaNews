import {Injectable} from '@angular/core';
import {NewsModel} from '../models/NewsModel';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {ProcessHttpmsgService} from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private API_KEY = '3e8e9916b3444f54abd15f3245724e5d';
  private BASE_URL = 'https://newsapi.org/v2/';
  readonly notificationURL = 'https://selfreckoning.firebaseapp.com/api/v1/';

  constructor(private processHttpMsg: ProcessHttpmsgService,
              private http: HttpClient) {
  }


  getNewsFromNewsAPI(category?: string): Observable<NewsModel> {
    const URL = category ? `${this.BASE_URL}top-headlines?country=in&category=${category}&apiKey=3e8e9916b3444f54abd15f3245724e5d`:
    `${this.BASE_URL}top-headlines?country=in&apiKey=3e8e9916b3444f54abd15f3245724e5d`;

    return this.http.get<NewsModel>(URL)
      .pipe(
        catchError(error => {
          return this.processHttpMsg.handleError(error);
        })
      );
  }

  postSubscription(sub: PushSubscription) {
    return this.http.post(this.notificationURL + 'subscribe', sub)
      .pipe(
        tap(subscribe => {
          console.log('Subscribed successfully');
        }),
        catchError(error => {
          return this.processHttpMsg.handleError(error);
        })
      );
  }
}
