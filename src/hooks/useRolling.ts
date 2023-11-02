import { useEffect, useState } from 'react';

const rollRight = <T>(array: T[]) => {
  const first = array.shift() as T;
  array.push(first);
  return [...array];
};
const rollLeft = <T>(array: T[]) => {
  const last = array.pop() as T;
  return [last, ...array];
};

export const useRolling = <T>(
  originStyleArray: T[],
  rollType: 'left' | 'right'
) => {
  const [styleArray, setStyleArray] = useState<T[]>(originStyleArray);

  const rollingFunc = rollType === 'left' ? rollLeft : rollRight;

  useEffect(() => {
    setInterval(() => {
      setStyleArray(rollingFunc);
    }, 2000);
  }, []);

  return styleArray;
};
