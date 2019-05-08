import {Component, OnInit} from '@angular/core';

import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  preparedNews = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getBusinessNews();
  }

  private getBusinessNews() {
    this.newsService.getBusinessNews()
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
