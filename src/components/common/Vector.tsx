import Image from 'next/image';

export const Vector = ({
  src,
  width,
  height,
  top,
  left,
}: {
  [key: string]: string;
}) => {
  return (
    <div
      className="absolute"
      style={{
        width,
        height,
        top,
        left,
      }}
    >
      <Image src={src} alt="vector" layout="fill" objectFit="contain" />
    </div>
  );
};
