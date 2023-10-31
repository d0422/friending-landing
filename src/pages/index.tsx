import { DownloadButtons } from '@/components/Sections/DownloadButtons';
import { Logo } from '@/components/Sections/Logo';
import { Rolling } from '@/components/Sections/Rolling';
import { Video } from '@/components/Sections/Video';

export default function App() {
  return (
    <>
      <Logo />
      {/* <Video /> */}
      <DownloadButtons />
      <Rolling />
    </>
  );
}
