import { useEffect, useState } from 'react';
import { useWindowWidth } from './useWindowWidth';

export const useResponsiveNum = () => {
  const [responsiveNum, setResponsiveNum] = useState<number>(1);
  const width = useWindowWidth();

  useEffect(() => {
    if (width) {
      if (width > 970) setResponsiveNum(1);
      else if (400 < width && width < 970) setResponsiveNum(3);
    }
  }, [width]);

  return responsiveNum;
};
