import Image from 'next/image';

export const Header = () => {
  return (
    <div className="w-full h-full items-center flex justify-between">
      <div className="flex relative h-9 basis-2/12 justify-center">
        <Image
          src={'/logo.png'}
          alt="friending-logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex basis-2/12 font-bold justify-center">CONTACT</div>
    </div>
  );
};
