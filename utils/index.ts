import { SetStateAction, Dispatch } from 'react';

export const isEven = (n: number) => {
  return n % 2 === 0;
};

export const hideNav = (setIsNavOpen: Dispatch<SetStateAction<boolean>>) => {
  window.addEventListener('resize', (e: any) => {
    if (e.target.innerWidth > 710) {
      setIsNavOpen(false);
    }
  });
};

export const disableScroll = (isNavOpen: boolean) => {
  if (isNavOpen) {
    document.body.classList.add('disable__scroll');
  } else {
    document.body.classList.remove('disable__scroll');
  }
};

export * from './styles';
export * from './data';
export * from './configs';
export * from './api';
