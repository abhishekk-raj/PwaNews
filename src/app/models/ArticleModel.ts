import {SourceModel} from './SourceModel';

export class ArticleModel {
  source = new SourceModel();
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
