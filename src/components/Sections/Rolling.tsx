import Image from 'next/image';
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

type Position = {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
};
type StyleOption = {
  center?: boolean;
  position: Position;
  brightness: number;
};

const DEFAULT_VW = 16.6;

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
      <div
        className={`relative pc:w-[8vw] pc:h-[8vw] mobile:w-[12vw] mobile:h-[12vw]`}
      >
        <Image src={src} alt="icon" layout="fill" objectFit="contain" />
        <div
          className="pc:w-[5vw] pc:h-[5vw] mobile:w-[9vw] mobile:h-[9vw]"
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
    position: { top: `${DEFAULT_VW * 2}%`, left: 0 },
    brightness: 75,
  },
  {
    position: { top: `${DEFAULT_VW}%`, left: `${DEFAULT_VW}%` },
    brightness: 90,
  },
  {
    position: { top: 0, left: `${DEFAULT_VW * 2 + DEFAULT_VW / 2}%` },
    center: true,
    brightness: 100,
  },
  {
    position: { top: `${DEFAULT_VW}%`, right: `${DEFAULT_VW}%` },
    brightness: 90,
  },
  { position: { top: `${DEFAULT_VW * 2}%`, right: 0 }, brightness: 75 },
  { position: { bottom: `${DEFAULT_VW * 2}%`, right: 0 }, brightness: 50 },
  {
    position: { bottom: `${DEFAULT_VW}%`, right: `${DEFAULT_VW}%` },
    brightness: 50,
  },
  { position: { bottom: 0, right: `${DEFAULT_VW * 2}%` }, brightness: 25 },
  { position: { bottom: 0, left: `${DEFAULT_VW * 2}%` }, brightness: 25 },
  {
    position: { bottom: `${DEFAULT_VW}%`, left: `${DEFAULT_VW}%` },
    brightness: 50,
  },
  { position: { bottom: `${DEFAULT_VW * 2}%`, left: 0 }, brightness: 50 },
];

export const Rolling = () => {
  return (
    <div className="w-full h-[1880px] flex flex-col justify-center items-center">
      <div className="text-[#ffffff] text-[4vw] mt-[16%] mb-[10%] flex justify-center">
        1초만에 교환하세요
      </div>
      <div className="relative pc:w-[55vw] pc:h-[55vw] mobile:w-[80vw] mobile:h-[80vw]">
        {ICONS.map((icon) => `/icons/${icon}.png`).map((icon, i) => (
          <Icon key={i} src={icon} style={styleOptions[i]} />
        ))}
      </div>
    </div>
  );
};
