import { SetStateAction, Dispatch } from 'react';

export const isEven = (n: number) => {
  return n % 2 === 0;
};

export const hideNav = (setIsNavHidden: Dispatch<SetStateAction<boolean>>) => {
  window.addEventListener('resize', (e: any) => {
    if (e.target.innerWidth > 800) {
      setIsNavHidden(true);
    }
  });
};

export const disableScroll = (isNavHidden: boolean) => {
  if (!isNavHidden) {
    document.body.classList.add('disable__scroll');
  } else {
    document.body.classList.remove('disable__scroll');
  }
};

export * from './styles';
export * from './data';
export * from './configs';
