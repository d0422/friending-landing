import { ProfileCard } from '@/pages/profile';
import { SNSButton } from './SNSButton';
import Image from 'next/image';
import { useState } from 'react';
import { Modal } from './Modal';

export const SNSList = [
  {
    tag: 'phone',
    src: '/sns/call.svg',
    name: '휴대폰',
  },
  {
    tag: 'instagram',
    src: '/sns/instagram.svg',
    name: '인스타',
  },
  { tag: 'twitter', src: '/sns/X.svg', name: '트위터' },
  { tag: 'kakaoTalk', src: '/sns/kakaoTalk.svg', name: '카톡' },
  { tag: 'email', src: '/sns/mail.svg', name: '이메일' },
  { tag: 'facebook', src: '/sns/facebook.svg', name: '페이스북' },
  { tag: 'discord', src: '/sns/discord.svg', name: '네이버블로그' },
  { tag: 'naverBlog', src: '/sns/blog.svg', name: '스레드' },
  { tag: 'telegram', src: '/sns/telegram.svg', name: '텔레그램' },
];

export const SNS = ({ data }: { data: ProfileCard }) => {
  const [isOpen, setOpen] = useState(false);
  const renderSNSList = SNSList.filter((sns) => data[sns.tag]);
  if (renderSNSList.length > 4)
    return (
      <>
        {isOpen && (
          <Modal
            data={data}
            renderSNSList={renderSNSList}
            cancel={() => setOpen(false)}
          />
        )}
        <div className="flex gap-4 mt-8">
          {renderSNSList.slice(0, 4).map((sns) => (
            <SNSButton
              name={sns.name}
              img={sns.src}
              href={data[sns.tag]}
              key={sns.name}
            />
          ))}
          <div
            className="p-3 rounded-full w-12 bg-[#EAEAFF] flex justify-center items-center"
            onClick={() => setOpen(true)}
          >
            <Image
              src="/sns/more.svg"
              alt="SNSButton"
              sizes="100vw"
              width={0}
              height={0}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </>
    );

  return (
    <div className="flex gap-4 mt-8">
      {renderSNSList.map((sns) => (
        <SNSButton
          name={sns.name}
          img={sns.src}
          href={data[sns.tag]}
          key={sns.name}
        />
      ))}
    </div>
  );
};
