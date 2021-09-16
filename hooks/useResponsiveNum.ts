import { useEffect, useState } from 'react';
import { useWindowWidth } from './useWindowWidth';

export const useResponsiveNum = () => {
  const [responsiveNum, setResponsiveNum] = useState<number>(2);
  const width = useWindowWidth();

  useEffect(() => {
    if (width) {
      if (width > 970) setResponsiveNum(2);
      else if (670 < width && width < 970) setResponsiveNum(4);
      else if (400 < width && width < 670) setResponsiveNum(5);
      else if (width < 400) setResponsiveNum(6);
    }
  }, [width]);

  return responsiveNum;
};
