import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="w-full h-[738px] flex justify-center items-center">
      <div className="w-[540px] h-[130px] relative">
        <Image src={'/logo.png'} alt="logo" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};
