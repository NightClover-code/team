//importing gql
import { gql } from '@apollo/client';

//fragments
export const articlesFragment = gql`
  fragment ArticlesDetail on Article {
    title
    description
    image {
      url
    }
    slug
    author {
      name
      publishDate
      avatar {
        url
      }
      slug
    }
  }
`;

export const articleFragment = gql`
  fragment ArticleDetail on Article {
    title
    content {
      raw
    }
    image {
      url
    }
    slug
    author {
      name
      description
      publishDate
      avatar {
        url
      }
      slug
    }
  }
`;
