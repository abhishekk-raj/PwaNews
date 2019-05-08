import {Component, OnInit} from '@angular/core';

import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  preparedNews = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getTechnologyNews();
  }

  private getTechnologyNews() {
    this.newsService.getTechnologyNews()
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
