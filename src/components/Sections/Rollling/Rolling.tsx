import { useEffect, useState } from 'react';
import { StyleOption } from '../../../type';
import { Icon } from './Icon';
import { styleOptions } from './rollingStyle';
import { Text } from '@/components/common/Text';
const ICONS = [
  'discord',
  'call',
  'band',
  'twitter',
  'thread',
  'snapchat',
  'line',
  'kakaoTalk',
  'kakaoStory',
  'instagram',
  'facebook',
];

const rollArray = (array: StyleOption[]) => {
  const first = array.shift() as StyleOption;
  array.push(first);
  return [...array];
};

const makePath = (fileName: string) => {
  return `/icons/${fileName}.png`;
};

export const Rolling = () => {
  const [styleArray, setStyleArray] = useState(styleOptions);
  useEffect(() => {
    setInterval(() => {
      setStyleArray(rollArray);
    }, 2000);
  }, []);

  return (
    <div className="w-full h-[130vw] flex flex-col justify-center items-center">
      <div className="mt-[16%] mb-[10%]">
        <Text>1초만에 교환하세요.</Text>
      </div>
      <div className="relative mb-[15%] pc:w-[55vw] pc:h-[55vw] mobile:w-[80vw] mobile:h-[80vw]">
        {ICONS.map(makePath).map((icon, i) => (
          <Icon key={i} src={icon} style={styleArray[i]} />
        ))}
      </div>
      <Text>무엇이든</Text>
    </div>
  );
};
