import Image from 'next/image';

export const CenterText = ({ children }: { children: string }) => {
  return <div className="flex mobile:justify-center w-full">{children}</div>;
};

export const Footer = () => {
  return (
    <div className="bg-[#242627] text-[#ffffff]  text-[1.5vw] ">
      <div className="flex pc:flex-row mobile:flex-col pc:justify-between p-[5.5vw] mobile:justify-center">
        <div className="flex gap-[6vw] pc:flex-row mobile:flex-col mobile:justify-center">
          <div className="w-[20vw] h-[4.8vw] relative mobile:flex mobile:justify-center mobile:w-full">
            <Image
              src={'/logo.png'}
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="mobile:flex mobile:justify-center mobile:flex-col">
            <CenterText>상호 | 프렌딩</CenterText>
            <CenterText>대표 | 김규민</CenterText>
            <CenterText>사업자 등록 번호 | 550-29-01349</CenterText>
            <div className="flex items-center gap-1 mobile:justify-center">
              <div className="w-[1.5vw] h-[1.5vw] relative">
                <Image
                  src={'/location.png'}
                  alt="location"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>주소</div>
            </div>
            <div className="flex items-center gap-1 mobile:justify-center">
              <div className="w-[1.5vw] h-[1.5vw] relative">
                <Image
                  src={'/mail.png'}
                  alt="mail"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>gyumin3312@dgist.ac.kr</div>
            </div>
          </div>
        </div>
        <div className="mobile:flex justify-center">
          이용약관 | <span className="text-bold">개인정보 처리방침</span>
        </div>
      </div>
      <div className="flex justify-center">
        copyright FRIENDING, All Rights Reserved
      </div>
    </div>
  );
};
