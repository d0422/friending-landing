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
  console.log(isLoading);
  useEffect(() => {
    console.log(window.location.hostname);
    console.log(1);
    axios
      .get(
        `http://api.friending.online/profile/${
          window.location.search.split(/\?id\=/)[1]
        }`
      )
      .then((res) => setData(res.data));
    setLoading(false);
    setData(data);
  }, []);

  if (isLoading) {
    return <div>로딩중</div>;
  }
  return (
    <div className="flex items-center justify-center w-full h-screen text-black">
      <div className="bg-white rounded-2xl max-w-[375px] w-full shadow-md flex-col flex gap-8 p-8 justify-center items-center">
        <div className="w-full">
          <div className="flex items-center justify-center w-20 rounded bg-secondary text-primary">
            {data?.usage}
          </div>
        </div>

        <Image
          src={'/defaultThumbnail.png'}
          alt="profileImg"
          width={100}
          height={100}
        ></Image>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-2xl font-bold">{data?.name}</div>
          <div className="text-xl text-[#9099A0]">{data?.nickName}</div>
        </div>
        <div>SNS링크</div>
        <div className="bg-[#F8F9FA] rounded-xl w-full p-4 font-[500]">
          <div>{data?.info}</div>
          <div className="w-full truncate text-[#9099A0]">
            {data?.hashTags?.map((hashTag) => `#${hashTag.hashTag} `).join('')}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
