class Article {
  title: string;
  content: string;
}

export interface AppState {
  articleState: ArticleState;
}

export interface ArticleState {
  articles: Article[];
}
