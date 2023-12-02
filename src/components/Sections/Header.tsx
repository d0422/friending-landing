import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-full">
      <div className="relative flex justify-center h-9 basis-2/12">
        <Image
          src={'/logo.png'}
          alt="friending-logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex items-center justify-center font-bold basis-2/12 h-9">
        CONTACT
      </div>
    </div>
  );
};
