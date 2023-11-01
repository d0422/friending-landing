import Image from 'next/image';
import { Text } from '../common/Text';

export const ProfileCards = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src="/profiles.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="profileCards"
        style={{
          width: '100%',
          maxWidth: '1228px',
          height: 'auto',
        }}
      />
      <div className="relative mt-[13%] mb-[38%] w-full">
        <Text>원하는 카드를</Text>
        <Text>필요한 순간에</Text>
        <div className="absolute w-[36vw] h-[36vw] -top-[90%] -right-[10%]">
          <Image
            src="/vector7.png"
            alt="vector"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};
