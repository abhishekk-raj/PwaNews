import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news.service';
import { NewsCategory } from '../../enums/news-category.enum';

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
    this.newsService.getNewsFromNewsAPI(NewsCategory.Business)
      .subscribe(topNews => {
        this.prepareNews(topNews.articles);
      });
  }

  private prepareNews(news) {
    while (news.length) {
      this.preparedNews.push(news.splice(0, 4));
    }
  }

}
