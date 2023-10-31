import Image from 'next/image';

export const DownloadButton = ({
  src,
  contentName,
}: {
  src: string;
  contentName: string;
}) => {
  return (
    <div className="flex cursor-pointer rounded-[64px] bg-[#ffffff] px-4 py-2 gap-2 items-center">
      <div className="flex relative w-[14px] h-[18px]">
        <Image src={src} alt={contentName} layout="fill" objectFit="contain" />
      </div>
      <div className="flex text-[#000000] font-bold">{contentName}</div>
    </div>
  );
};
