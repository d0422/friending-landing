import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ProfileCard {
  discord: string;
  email: string;
  facebook: string;
  hashTags: [{ id: number; hashTag: string }];
  id: number;
  image: string;
  info: string;
  instagram: string;
  isPublic: true;
  kakaoStory: string;
  kakaoTalk: string;
  line: string;
  name: string;
  naverBand: string;
  naverBlog: string;
  nickName: string;
  phone: string;
  snapchat: string;
  telegram: string;
  thread: string;
  twitter: string;
  usage: string;
  whatsapp: string;
  workSpace: string;
}
export default function Profile() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ProfileCard>();
  useEffect(() => {
    console.log(1);
    axios
      .get(`/profile/${window.location.search.split(/\?id\=/)[1]}`)
      .then((res) => setData(res.data));
    setLoading(false);
    setData(data);
  }, []);

  if (isLoading) {
    return <div>로딩중</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-8 text-black bg-white">
      <div className="relative bg-white rounded-2xl max-w-[375px] w-full shadow-md flex-col flex gap-8 justify-center items-center">
        <Image
          src={'/defaultThumbnail.png'}
          alt="profileImg"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: '100%' }}
        />
        <div className="flex flex-col w-full gap-2 px-8 pb-8">
          <div className="absolute w-full top-[3%] left-[5%] ">
            <div className="flex items-center justify-center w-20 rounded bg-secondary">
              {data?.usage}
            </div>
          </div>

          <div className="flex items-end justify-start w-full gap-4">
            <div className="text-5xl font-bold">{data?.name}</div>
            <div className="flex items-center justify-center p-1 rounded bg-secondary text-primary ">
              {data?.nickName}
            </div>
          </div>

          <div className="w-full gap-4 mt-2 rounded-xl">
            <div className="font-[600]">{data?.info}</div>
            <div className="w-full truncate text-[#9099A0]">
              {data?.hashTags
                ?.map((hashTag) => `#${hashTag.hashTag} `)
                .join('')}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-xl font-[600]">
        <div>지금 사전 예약하면</div>
        <div>앱을 무료로 사용할 수 있어요!</div>
      </div>
      <div className="flex gap-4">
        <div className="bg-[#EAEAFF] text-primary p-4 rounded-lg font-bold px-8">
          사진으로 저장
        </div>
        <div className="bg-[#514FFF] text-white p-4 rounded-lg font-bold px-8">
          앱 다운받기
        </div>
      </div>
    </div>
  );
}