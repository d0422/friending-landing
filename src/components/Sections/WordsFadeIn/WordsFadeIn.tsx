import { Vector } from '@/components/common/Vector';
import { words } from './words';
import { Word } from './Word';
import { Text } from '@/components/common/Text';

export const WordsFadeIn = () => {
  return (
    <div>
      <div className="w-full h-[70vw] relative">
        {words.map((word) => (
          <Word wordObject={word} key={word.word} />
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
      <Text>이것까지도</Text>
    </div>
  );
};
