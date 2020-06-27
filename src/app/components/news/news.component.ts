import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news.service';
import { PubsubService } from 'src/app/services/pubsub.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  preparedNews = [];

  constructor(private newsService: NewsService,
    private pubsubService: PubsubService) {
  }

  ngOnInit() {
    this.getTopHeadlineNews();
  }


  private getTopHeadlineNews() {
    this.pubsubService.getNewsCategory().subscribe((category: string) => {
      this.newsService.getNewsFromNewsAPI(category)
      .subscribe(topNews => {
        this.prepareNews(topNews.articles);
      });
    });
  }

  private prepareNews(news) {
    this.preparedNews = [];
    while (news.length) {
      this.preparedNews.push(news.splice(0, 4));
    }
  }

}
