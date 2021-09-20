import { SetStateAction, Dispatch } from 'react';

export interface BooleanState {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}

export interface Article {
  title: string;
  description: string;
  content: string;
  image: {
    url: string;
  };
  slug: string;
  author: Author;
}

export interface Author {
  name: string;
  description: string;
  publishDate: string;
  avatar: {
    url: string;
  };
  slug: string;
}
