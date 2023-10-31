import Image from 'next/image';
import { useEffect, useState } from 'react';
const ICONS = [
  'blind',
  'call',
  'discord',
  'facebook',
  'instagram',
  'kakaoStory',
  'kakaoTalk',
  'line',
  'snapchat',
  'thread',
  'twitter',
];
const ICON_SIZE = 126;

type Position = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};
type StyleOption = {
  center?: boolean;
  position: Position;
  brightness: number;
};

const Icon = ({ src, style }: { src: string; style: StyleOption }) => {
  return (
    <div
      className={`absolute`}
      style={{
        top: style.position?.top,
        left: style.position?.left,
        right: style.position?.right,
        bottom: style.position?.bottom,
        filter: `brightness(${style.brightness}%)`,
        transform: `scale(${style.center ? '1.2' : 1})`,
        transition: 'all 1s ease-in-out',
      }}
    >
      <div className={`w-[126px] h-[126px] relative `}>
        <Image src={src} alt="icon" layout="fill" objectFit="contain" />
        <div
          className="w-[100px] h-[100px]"
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

const styleOptions: StyleOption[] = [
  {
    position: { top: ICON_SIZE * 2, left: 0 },
    brightness: 75,
  },
  { position: { top: ICON_SIZE, left: ICON_SIZE }, brightness: 90 },
  {
    position: { top: 0, left: ICON_SIZE * 2 + 85 },
    center: true,
    brightness: 100,
  },
  { position: { top: ICON_SIZE, right: ICON_SIZE }, brightness: 90 },
  { position: { top: ICON_SIZE * 2, right: 0 }, brightness: 75 },
  { position: { bottom: ICON_SIZE * 2, right: 0 }, brightness: 50 },
  { position: { bottom: ICON_SIZE, right: ICON_SIZE }, brightness: 50 },
  { position: { bottom: 0, right: ICON_SIZE * 2 }, brightness: 25 },
  { position: { bottom: 0, left: ICON_SIZE * 2 }, brightness: 25 },
  { position: { bottom: ICON_SIZE, left: ICON_SIZE }, brightness: 50 },
  { position: { bottom: ICON_SIZE * 2, left: 0 }, brightness: 50 },
];
export const Rolling = () => {
  return (
    <div className="w-full h-[1880px] flex flex-col justify-center items-center">
      <div className="text-[#ffffff] text-[60px] mt-[16%] mb-[10%] flex justify-center">
        1초만에 교환하세요
      </div>
      <div className="relative  w-[800px] h-[800px]">
        {ICONS.map((icon) => `/icons/${icon}.png`).map((icon, i) => (
          <Icon key={i} src={icon} style={styleOptions[i]} />
        ))}
      </div>
    </div>
  );
};
