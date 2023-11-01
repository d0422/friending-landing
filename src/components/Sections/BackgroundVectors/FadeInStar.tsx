import { Text } from '@/components/common/Text';
import Image from 'next/image';

export const FadeInStar = ({
  src,
  position,
}: {
  src: string;
  position: { top: number; left?: number; right?: number };
}) => {
  const { top, left, right } = position;
  return (
    <div className="w-full  h-[36vw] relative">
      <div
        className="absolute w-[36vw] h-[36vw]"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          right: `${right}%`,
        }}
      >
        <Image src={src} alt="vector" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export const GreenFadeInStar = () => {
  const position = {
    top: 0,
    right: -10,
  };
  return <FadeInStar src={'/vector1.png'} position={position} />;
};

export const YellowLeftFadeInStar = () => {
  const position = {
    top: 0,
    left: -10,
  };
  return <FadeInStar src={'/vector6.png'} position={position} />;
};
