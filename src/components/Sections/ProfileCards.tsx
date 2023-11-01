import Image from 'next/image';
import { Text } from '../common/Text';
import { CardInfo } from '@/type';
import { cardsInfo } from './cardInfo';

const Card = ({ cardInfo }: { cardInfo: CardInfo }) => {
  const {
    src,
    rotateInfo: { rotateY, translateX, translateZ },
  } = cardInfo;
  return (
    <div
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(34vw) rotateY(${rotateY || 0}) translateX(${
          translateX || 0
        }) translateZ(${translateZ}) `,
      }}
    >
      <Image
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        alt="profileCards"
        style={{
          width: '15vw',
          height: 'auto',
        }}
      />
    </div>
  );
};

export const ProfileCards = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex">
        {cardsInfo.map((cardInfo) => (
          <Card cardInfo={cardInfo} />
        ))}
      </div>
      <div className="mt-[15vw]">
        <Text>원하는 카드를</Text>
        <Text>필요한 순간에</Text>
      </div>
    </div>
  );
};
