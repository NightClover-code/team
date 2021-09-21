//importing gql
import { gql } from '@apollo/client';
import { articleFragment, articlesFragment } from '.';

//queries
export const articlesQuery = gql`
  query ArticlesQuery {
    articles {
      ...ArticlesDetail
    }
  }
  ${articlesFragment}
`;

export const articleQuery = gql`
  query ArticleQuery($slug: String!) {
    article: article(where: { slug: $slug }) {
      ...ArticleDetail
    }
  }
  ${articleFragment}
`;
