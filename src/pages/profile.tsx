import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SNS } from '@/components/profile/SNS';
import { toPng } from 'html-to-image';
export interface ProfileCard {
  [key: string]: any;
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
  const [isError, setError] = useState(false);
  const [data, setData] = useState<ProfileCard>();
  const downloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .post(`/api/webLink`, {
        token: window.location.search.split(/\?token\=/)[1],
      })
      .then((res) => (res.data ? setData(res.data) : setError(true)));
    setLoading(false);
    setData(data);
  }, []);

  const downLoad = async () => {
    if (downloadRef.current) {
      toPng(downloadRef.current).then((data) => {
        const link = document.createElement('a');
        link.download = 'card.png';
        link.href = data;
        link.click();
      });
    }
  };
  if (isError) {
    return (
      <div className="flex items-center justify-center w-screen h-screen text-xl">
        만료된 링크입니다!
      </div>
    );
  }
  if (isLoading || !data) {
    return (
      <div className="flex items-center justify-center w-screen h-screen text-xl">
        로딩중
      </div>
    );
  }

  if (data)
    return (
      <div className="flex flex-col items-center justify-center w-full gap-8 p-4 text-black bg-white">
        <div className="text-2xl font-bold">프렌딩 요청이 왔어요</div>
        <div
          ref={downloadRef}
          className="relative bg-white rounded-2xl max-w-[350px] w-full shadow-md flex-col flex gap-8 justify-center items-center"
        >
          <Image
            src={data.image || '/defaultThumbnail.png'}
            alt="profileImg"
            sizes="100vw"
            width={0}
            height={0}
            style={{ width: '100%' }}
            className="rounded-t-2xl"
          />
          <div className="flex flex-col w-full gap-2 px-8 pb-8">
            <div className="flex items-end justify-start w-full gap-4">
              <div className="text-5xl font-bold">{data?.name}</div>
              <div className="flex items-center justify-center p-1 rounded bg-secondary text-primary ">
                {data?.nickName}
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 mt-2 rounded-xl ">
              <div className="font-[600]">{data?.info}</div>
              <div className="w-full truncate text-[#9099A0]">
                {data?.hashTags
                  ?.map((hashTag) => `#${hashTag.hashTag} `)
                  .join('')}
              </div>
            </div>
            <SNS data={data} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-xl font-[600]">
          <div>지금 사전 예약하면</div>
          <div>앱을 무료로 사용할 수 있어요!</div>
        </div>
        <div className="flex gap-4">
          <div
            onClick={downLoad}
            className="cursor-pointer bg-[#EAEAFF] text-primary p-4 rounded-lg font-bold px-10"
          >
            사진으로 저장
          </div>
          <div className="bg-[#514FFF] text-white p-4 rounded-lg font-bold px-10">
            앱 다운받기
          </div>
        </div>
      </div>
    );
}
