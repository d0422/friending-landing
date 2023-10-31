import Image from 'next/image';

export const FadeInStar = () => {
  return (
    <div className="w-full  h-[36vw] relative">
      <div className="absolute top-0 -right-[10%] w-[36vw] h-[36vw]">
        <Image
          src={'/vector1.png'}
          alt="vector"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
