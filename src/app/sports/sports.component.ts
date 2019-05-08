import {Component, OnInit} from '@angular/core';

import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  preparedNews = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getSportsNews();
  }

  private getSportsNews() {
    this.newsService.getSportsNews()
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
