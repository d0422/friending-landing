import Image from 'next/image';

export const SNSButton = ({ href, img }: { href: string; img: string }) => {
  if (img.match('call')) {
    return (
      <a className="w-12 p-4 rounded-full bg-primary" href={`tel:${href}`}>
        <Image
          src={img}
          alt="SNSButton"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: '100%' }}
        />
      </a>
    );
  }
  return (
    <a className="w-12 p-4 rounded-full bg-primary" href={href}>
      <Image
        src={img}
        alt="profileImg"
        sizes="100vw"
        width={0}
        height={0}
        style={{ width: '100%' }}
      />
    </a>
  );
};
