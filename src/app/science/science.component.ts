import {Component, OnInit} from '@angular/core';

import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  preparedNews = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getScienceNews();
  }

  private getScienceNews() {
    this.newsService.getScienceNews()
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
