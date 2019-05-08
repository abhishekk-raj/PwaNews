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
  private baseUrl = 'https://newsapi.org/v2/';
  readonly notificationURL = 'https://selfreckoning.firebaseapp.com/api/v1/';
  // readonly notificationURL = 'http://localhost:5000/api/v1/';

  constructor(private processHttpMsg: ProcessHttpmsgService,
              private http: HttpClient) {
  }


  getTopHeadlines(): Observable<NewsModel> {
    return this.http.get<NewsModel>('https://newsapi.org/v2/top-headlines?country=in&apiKey=3e8e9916b3444f54abd15f3245724e5d')
      .pipe(
        tap(topHeadlines => {
          console.log('News fetched successfully');
        }),
        catchError(error => {
          return this.processHttpMsg.handleError(error);
        })
      );
  }

  getGeneralNews(): Observable<NewsModel> {
    return this.http
      .get<NewsModel>('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=3e8e9916b3444f54abd15f3245724e5d')
      .pipe(
        tap(generalNews => {
          console.log('News fetched successfully');
        }),
        catchError(error => {
          return this.processHttpMsg.handleError(error);
        })
      );
  }

  getBusinessNews(): Observable<NewsModel> {
    return this.http
      .get<NewsModel>('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3e8e9916b3444f54abd15f3245724e5d')
      .pipe(
        tap(businessNews => {
          console.log('News fetched successfully');
        }),
        catchError(error => {
          return this.processHttpMsg.handleError(error);
        })
      );
  }

  getEntertainmentNews(): Observable<NewsModel> {
    return this.http
      .get<NewsModel>('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3e8e9916b3444f54abd15f3245724e5d')
      .pipe(
        tap(entertainmentNews => {
          console.log('News fetched successfully');
        }),
        catchError(error => {
          return this.processHttpMsg.handleError(error);
        })
      );
  }

  getHealthNews(): Observable<NewsModel> {
    return this.http
      .get<NewsModel>('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=3e8e9916b3444f54abd15f3245724e5d')
      .pipe(
        tap(healthNews => {
          console.log('News fetched successfully');
        }),
        catchError(error => {
          return this.processHttpMsg.handleError(error);
        })
      );
  }

  getScienceNews(): Observable<NewsModel> {
    return this.http
      .get<NewsModel>('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=3e8e9916b3444f54abd15f3245724e5d')
      .pipe(
        tap(scienceNews => {
          console.log('News fetched successfully');
        }),
        catchError(error => {
          return this.processHttpMsg.handleError(error);
        })
      );
  }

  getSportsNews(): Observable<NewsModel> {
    return this.http
      .get<NewsModel>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3e8e9916b3444f54abd15f3245724e5d')
      .pipe(
        tap(sportsNews => {
          console.log('News fetched successfully');
        }),
        catchError(error => {
          return this.processHttpMsg.handleError(error);
        })
      );
  }

  getTechnologyNews(): Observable<NewsModel> {
    return this.http
      .get<NewsModel>('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3e8e9916b3444f54abd15f3245724e5d')
      .pipe(
        tap(technologyNews => {
          console.log('News fetched successfully');
        }),
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
