import { DownloadButtons } from '@/components/Sections/DownloadButtons';
import { FadeInStar } from '@/components/Sections/FadeInStar';
import { Logo } from '@/components/Sections/Logo';
import { Rolling } from '@/components/Sections/Rolling';
import { Vectors } from '@/components/Sections/Vectors';
import { Video } from '@/components/Sections/Video';
import { WordsFadeIn } from '@/components/Sections/WordsFadeIn';

export default function App() {
  return (
    <>
      <Logo />
      {/* <Video /> */}
      <DownloadButtons />
      <Rolling />
      <FadeInStar />
      <Vectors />
      <WordsFadeIn />
      <div className="text-[#ffffff] text-[4vw] flex justify-center">
        이것까지도
      </div>
    </>
  );
}
