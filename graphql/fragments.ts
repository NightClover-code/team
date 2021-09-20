//importing gql
import { gql } from '@apollo/client';

//fragments
export const articleDetailFragment = gql`
  fragment ArticleDetail on Article {
    title
    description
    content
    image
    slug
    author {
      name
      description
      publishDate
      avatar
      slug
    }
  }
`;
