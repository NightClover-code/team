import { useEffect, useState } from 'react';
import { counterResultType } from '../types';
import { useWindowWidth } from './useWindowWidth';

export const useCounter = () => {
  const [counter, setCounter] = useState<number>(0);
  const width = useWindowWidth();

  useEffect(() => setCounter(0), [width]);

  return [counter, setCounter] as counterResultType;
};
