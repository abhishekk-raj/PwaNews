import {Component, OnInit} from '@angular/core';

import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  preparedNews = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getTopHeadlineNews();
  }


  private getTopHeadlineNews() {
    this.newsService.getTopHeadlines()
      .subscribe(topNews => {
        // console.log('Top News :: ', topNews.articles);

        this.prepareNews(topNews.articles);
      });
  }

  private prepareNews(news) {
    while (news.length) {
      this.preparedNews.push(news.splice(0, 4));
    }

    console.log('Prepared News :: ', this.preparedNews);
  }

}
