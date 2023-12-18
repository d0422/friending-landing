import Image from 'next/image';

export const SNSButton = ({
  name,
  href,
  img,
}: {
  name: string;
  href: string;
  img: string;
}) => {
  const getLink = (name: string, href: string) => {
    if (name === '인스타') return `https://www.instagram.com/${href}`;
    if (name === '트위터') return `https://twitter.com/${href}`;
    if (name === '휴대폰') return `tel:${href}`;
    if (name === '이메일') return `mailto:${href}`;
    if (name === '페이스북') return `https://www.facebook.com/${href}`;
    if (name === '네이버블로그') return `https://blog.naver.com/${href}`;
    return href;
  };

  return (
    <a className="w-12 p-3 rounded-full bg-primary" href={getLink(name, href)}>
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
