import Image from 'next/image';
import { Text } from '../../common/Text';
import { CardInfo, RotateInfo } from '@/type';
import { cardRollingStyle } from './cardRollingStyle';
import { useEffect, useState } from 'react';

const Card = ({ cardInfo }: { cardInfo: CardInfo }) => {
  const {
    src,
    rotateInfo: { rotateY, translateX, translateZ },
  } = cardInfo;
  return (
    <div
      style={{
        transition: 'all 1s',
        transformStyle: 'preserve-3d',
        transform: `perspective(34vw) rotateY(${rotateY || 0}) translateX(${
          translateX || 0
        }) translateZ(${translateZ}) `,
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

const rollArray = (array: string[]) => {
  const first = array.shift() as string;
  array.push(first);
  return [...array];
};

export const ProfileCards = () => {
  const cardInfo = ['profile1', 'profile2', 'profile5', 'profile3', 'profile4'];
  const [cards, setCards] = useState<string[]>(cardInfo);

  useEffect(() => {
    setInterval(() => {
      setCards((prev) => rollArray(prev));
    }, 2000);
  }, []);

  const cardInfomation = cards.map((card, index) => {
    return {
      src: card,
      rotateInfo: cardRollingStyle[index],
    } as CardInfo;
  });
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex">
        {cardInfomation.map((cardInfo, i) => (
          <Card key={cardInfo.src + i} cardInfo={cardInfo} />
        ))}
      </div>
      <div className="mt-[15vw]">
        <Text>원하는 카드를</Text>
        <Text>필요한 순간에</Text>
      </div>
    </div>
  );
};
