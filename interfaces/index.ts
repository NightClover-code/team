import { SetStateAction, Dispatch } from 'react';

export interface BooleanState {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}

export interface HeroInterface {
  title: string;
  description: string;
}

export interface ArticleInterface {
  title: string;
  description: string;
  content: any;
  image: {
    url: string;
  };
  slug: string;
  author: AuthorInterface;
}

export interface AuthorInterface {
  name: string;
  description?: string;
  publishDate: string;
  avatar: {
    url: string;
  };
  slug?: string;
}
