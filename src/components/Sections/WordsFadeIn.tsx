import { Vector } from '../common/Vector';

type WordObject = {
  word: string;
  size: string;
  position: {
    top: number;
    left: number;
  };
  delay: number;
  duration: number;
};
const Word = ({ wordObject }: { wordObject: WordObject }) => {
  return (
    <div
      className="text-[#ffffff] font-bold absolute animate-fadeIn z-10"
      style={{
        fontSize: wordObject.size,
        top: `${wordObject.position.top}%`,
        left: `${wordObject.position.left}%`,
        animationDelay: `${wordObject.delay}s`,
        animationDuration: `${wordObject.duration}s`,
      }}
    >
      {wordObject.word}
    </div>
  );
};

const words: WordObject[] = [
  {
    word: '이민주',
    size: '3vw',
    position: {
      top: 2,
      left: 25,
    },
    delay: 1,
    duration: 7,
  },
  {
    word: '맛집탐방',
    size: '7vw',
    position: {
      top: 5,
      left: 2,
    },
    delay: 6,
    duration: 3,
  },
  {
    word: 'MBTI',
    size: '5vw',
    position: {
      top: 6,
      left: 30,
    },
    delay: 2,
    duration: 4,
  },
  {
    word: '24학번',
    size: '7vw',
    position: {
      top: 15,
      left: 20,
    },
    delay: 2,
    duration: 3,
  },
  {
    word: '부산',
    size: '5vw',
    position: {
      top: 20,
      left: 2,
    },
    delay: 2,
    duration: 5,
  },
  {
    word: 'BIRTH',
    size: '5vw',
    position: {
      top: 26,
      left: 25,
    },
    delay: 2,
    duration: 4,
  },
  {
    word: '카페투어',
    size: '6vw',
    position: {
      top: 13,
      left: 45,
    },
    delay: 2,
    duration: 7,
  },
  {
    word: 'ENFP',
    size: '6vw',
    position: {
      top: 16,
      left: 55,
    },
    delay: 3,
    duration: 6,
  },
  {
    word: '경영학부',
    size: '6vw',
    position: {
      top: 2,
      left: 70,
    },
    delay: 2,
    duration: 5,
  },
  {
    word: '자전거',
    size: '3.5vw',
    position: {
      top: 22,
      left: 38,
    },
    delay: 4,
    duration: 4,
  },
  {
    word: '관심사',
    size: '4vw',
    position: {
      top: 28,
      left: 46,
    },
    delay: 6,
    duration: 3,
  },
  {
    word: '서연대',
    size: '3vw',
    position: {
      top: 40,
      left: 60,
    },
    delay: 1,
    duration: 3,
  },
  {
    word: '취미',
    size: '4vw',
    position: {
      top: 30,
      left: 78,
    },
    delay: 1,
    duration: 3,
  },
  {
    word: '생일 08.11',
    size: '6.5vw',
    position: {
      top: 50,
      left: 50,
    },
    delay: 1,
    duration: 3,
  },
  {
    word: '넷플릭스',
    size: '3vw',
    position: {
      top: 32,
      left: 20,
    },
    delay: 1,
    duration: 4,
  },
  {
    word: '집순이',
    size: '3vw',
    position: {
      top: 50,
      left: 20,
    },
    delay: 1,
    duration: 4,
  },
];

export const WordsFadeIn = () => {
  return (
    <div className="w-full h-[70vw] relative">
      {words.map((word) => (
        <Word wordObject={word} />
      ))}
      <Vector
        src="/vector4.png"
        width="19vw"
        height="19vw"
        top="55%"
        left="10%"
      />
      <Vector
        src="/vector5.png"
        width="22vw"
        height="22vw"
        top="3%"
        left="75%"
      />
    </div>
  );
};
