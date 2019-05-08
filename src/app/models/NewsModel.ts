import {ArticleModel} from './ArticleModel';

export class NewsModel {
  status: string;
  totalResults: number;
  articles = new ArticleModel();
}
