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
import { Footer } from '@/components/Sections/Footer';
import { RollingProfileCards } from '@/components/Sections/ProfileCards/RollingProfileCards';
import { Header } from '@/components/Sections/Header';

export default function App() {
  return (
    <>
      <Header />
      <Video />
      <DownloadButtons />
      <Rolling />
      <GreenFadeInStar />
      <Vectors />
      <WordsFadeIn />
      <YellowLeftFadeInStar />
      <RollingProfileCards />
      <Logo />
      <Footer />
    </>
  );
}
