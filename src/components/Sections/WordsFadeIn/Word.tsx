import { WordObject } from '@/type';

export const Word = ({ wordObject }: { wordObject: WordObject }) => {
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
