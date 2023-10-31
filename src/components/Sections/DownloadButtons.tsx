import { DownloadButton } from '../common/DownloadButton';

export const DownloadButtons = () => {
  const contents = [
    { src: '/apple.png', contentName: '앱스토어' },
    { src: '/playStore.png', contentName: '플레이스토어' },
  ];
  return (
    <div className="flex w-full justify-center items-center gap-5 my-20">
      {contents.map((content) => (
        <DownloadButton src={content.src} contentName={content.contentName} />
      ))}
    </div>
  );
};
