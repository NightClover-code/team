import { ArticleInterface } from '../interfaces';

export const arrowForwardConfig = {
  width: '30',
  height: '35',
};

export const seoConfig = {
  title: 'Team - Instant collaboration for remote teams',
  description:
    'The easiest and fastest way to share work with groups and to simplify project management.',
};

export const blogSeoConfig = {
  title: 'Blog page - Team',
  description:
    "Read about people's experiences and gain knowledge along the way.",
};

export const disqusConfig = (article: ArticleInterface) => {
  const { slug, title } = article;

  return {
    shortname: 'team-8',
    config: {
      url: 'http://localhost:3000',
      identifier: slug,
      title,
    },
  };
};

export const blogDetailSeoConfig = (article: ArticleInterface) => {
  const {
    title,
    description,
    author: { name },
  } = article;
  return {
    title: `${title} - by ${name}`,
    description,
  };
};
