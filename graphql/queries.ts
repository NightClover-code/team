//importing gql
import { gql } from '@apollo/client';
import { articleFragment, articlesFragment } from '.';

//queries
export const articlesQuery = gql`
  query ArticlesQuery($limit: Int!, $offset: Int!) {
    articlesConnection(first: $limit, skip: $offset) {
      articles: edges {
        node {
          ...ArticlesDetail
        }
      }
      pageInfo {
        hasNextPage
        hasNextPage
      }
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
