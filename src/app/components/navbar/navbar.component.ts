import { Component, OnInit } from '@angular/core';
import { PubsubService } from 'src/app/services/pubsub.service';
import { NewsCategory } from 'src/app/enums/news-category.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbarMenu = [
    {name: 'home', category: null},
    {name: 'general', category: NewsCategory.General},
    {name: 'business', category: NewsCategory.Business},
    {name: 'entertainment', category: NewsCategory.Entertainment},
    {name: 'health', category: NewsCategory.Health},
    {name: 'science', category: NewsCategory.Science},
    {name: 'sports', category: NewsCategory.Sports},
    {name: 'technology', category: NewsCategory.Technology}
  ];

  constructor(private pubsubService: PubsubService) { }

  ngOnInit() {
  }

  public updateNewsCategory(category: string): void {
    this.pubsubService.updateNewsCategory(category);
  }

}
