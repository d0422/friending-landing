import Image from 'next/image';
import { Text } from '../../common/Text';
import { CardInfo, RotateInfo } from '@/type';
import { cardRollingStyle } from './cardRollingStyle';
import { useEffect, useState } from 'react';

const Card = ({ src, rotateInfo }: { src: string; rotateInfo: RotateInfo }) => {
  const { rotateY, translateX, translateZ, left, zIndex } = rotateInfo;
  return (
    <div
      className="absolute"
      style={{
        transition: 'all 1s',
        transformStyle: 'preserve-3d',
        transform: `perspective(34vw) rotateY(${rotateY || 0}) translateX(${
          translateX || 0
        }) translateZ(${translateZ}) `,
        left,
        zIndex,
      }}
    >
      <Image
        src={`/profiles/${src}.png`}
        width={0}
        height={0}
        sizes="100%"
        style={{
          width: '15vw',
          height: 'auto',
        }}
        alt="profileCards"
      />
    </div>
  );
};

const rollArray = (array: RotateInfo[]) => {
  const last = array.pop() as RotateInfo;
  return [last, ...array];
};

export const ProfileCards = () => {
  const cardInfo = ['profile1', 'profile2', 'profile5', 'profile3', 'profile4'];
  const [style, setStyle] = useState<RotateInfo[]>(cardRollingStyle);

  useEffect(() => {
    setInterval(() => {
      setStyle((prev) => rollArray(prev));
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="relative h-[400px] w-[80vw]">
        {cardInfo.map((src, i) => (
          <Card key={src + i} src={src} rotateInfo={style[i]} />
        ))}
      </div>
      <div className="mt-[15vw]">
        <Text>원하는 카드를</Text>
        <Text>필요한 순간에</Text>
      </div>
    </div>
  );
};
