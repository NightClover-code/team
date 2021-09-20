//importing gql
import { gql } from '@apollo/client';
import { articleDetailFragment } from './fragments';

//queries
export const articlesQuery = gql`
  query ArticlesQuery {
    articles {
      ...ArticleDetail
    }
  }
  ${articleDetailFragment}
`;
