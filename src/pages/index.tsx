import { DownloadButtons } from '@/components/Sections/DownLoadButtons/DownloadButtons';
import {
  GreenFadeInStar,
  YellowLeftFadeInStar,
} from '@/components/Sections/BackgroundVectors/FadeInStar';
import { Logo } from '@/components/Sections/Logo/Logo';
import { Rolling } from '@/components/Sections/Rollling/Rolling';
import { Vectors } from '@/components/Sections/WordsFadeIn/Vectors';
import { Video } from '@/components/Sections/Video';
import { WordsFadeIn } from '@/components/Sections/WordsFadeIn/WordsFadeIn';
import { ProfileCards } from '@/components/Sections/ProfileCards';

export default function App() {
  return (
    <>
      <Logo />
      {/* <Video /> */}
      <DownloadButtons />
      <Rolling />
      <GreenFadeInStar />
      <Vectors />
      <WordsFadeIn />
      <YellowLeftFadeInStar />
      <ProfileCards />
      <Logo />
    </>
  );
}
