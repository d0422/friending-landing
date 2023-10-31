import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="w-full h-[51vw] flex justify-center items-center">
      <div className="w-[37.5vw] h-[9vw] relative">
        <Image src={'/logo.png'} alt="logo" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};
