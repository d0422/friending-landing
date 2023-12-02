import { useEffect, useRef, useState } from 'react';

export const Video = () => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false;
      videoRef.current.autoplay = true;
      videoRef.current.muted = true;

      videoRef.current.onended = () => {
        if (videoRef.current) {
          videoRef.current.loop = false;
          videoRef.current.controls = true;
          videoRef.current.muted = false;
          videoRef.current.onended = null;
        }
      };
      videoRef.current.play();
    }
    window.onresize = () => {
      if (timer.current === null) {
        timer.current = setTimeout(() => {
          if (window.innerWidth > 767) {
            if (videoRef.current) {
              videoRef.current.controls = true;
              videoRef.current.loop = false;
              videoRef.current.muted = false;
            }
          } else {
            if (videoRef.current) {
              videoRef.current.controls = false;
              videoRef.current.loop = true;
              videoRef.current.muted = true;
              videoRef.current.autoplay = true;
              videoRef.current.play();
            }
          }
          clearTimeout(timer.current as NodeJS.Timeout);
          timer.current = null;
        }, 500);
      }
    };
  }, []);
  return (
    <video className="w-full mt-15" ref={videoRef}>
      <source src="/landing_mov.mp4"></source>
    </video>
  );
};
