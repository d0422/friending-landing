import { RotateInfo } from '@/type';
import Image from 'next/image';

export const Card = ({
  src,
  rotateInfo,
}: {
  src: string;
  rotateInfo: RotateInfo;
}) => {
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
