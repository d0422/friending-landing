import Image from 'next/image';
import { StyleOption } from '@/type';

export const Icon = ({ src, style }: { src: string; style: StyleOption }) => {
  return (
    <div
      className={`absolute`}
      style={{
        top: style.position?.top,
        left: style.position?.left,
        right: style.position?.right,
        bottom: style.position?.bottom,
        filter: `brightness(${style.brightness}%)`,
        transform: `scale(${style.center ? '1.3' : 1})`,
        transition: 'all 1s ',
      }}
    >
      <div
        className={`relative pc:w-[8.5vw] pc:h-[8.5vw] mobile:w-[12vw] mobile:h-[12vw]`}
      >
        <Image src={src} alt="icon" layout="fill" objectFit="contain" />
        <div
          className="pc:w-[6.5vw] pc:h-[6.5vw] mobile:w-[9vw] mobile:h-[9vw]"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%)`,
            boxShadow: `0px 0px 40px 5px #ffffff`,
            zIndex: -1,
          }}
        ></div>
      </div>
    </div>
  );
};
