import { ProfileCard } from '@/pages/profile';
import { SNSButton } from './SNSButton';

export const Modal = ({
  data,
  renderSNSList,
  cancel,
}: {
  data: ProfileCard;
  renderSNSList: {
    tag: string;
    src: string;
    name: string;
  }[];
  cancel: () => void;
}) => {
  return (
    <div
      className="z-20 fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-[rgba(0,0,0,0.5)]"
      onClick={cancel}
    >
      <div className="flex flex-col items-center justify-center gap-4 py-8 bg-white px-11 rounded-2xl">
        <div className="mb-6 text-xl font-bold">SNS 더보기</div>
        <div className="grid grid-cols-4 gap-6">
          {renderSNSList.map((sns) => (
            <div
              className="flex flex-col items-center justify-center gap-1"
              key={sns.name}
            >
              <SNSButton img={sns.src} href={data[sns.name]} name={sns.name} />
              <div className="text-xs">{sns.name}</div>
            </div>
          ))}
        </div>
        <div
          className="bg-[#514FFF] text-white p-4 rounded-lg font-bold w-full flex justify-center mt-10"
          onClick={cancel}
        >
          확인
        </div>
      </div>
    </div>
  );
};
