import { StyleOption } from '@/type';

const DEFAULT_VW = 16.6;

export const styleOptions: StyleOption[] = [
  {
    position: { top: `${DEFAULT_VW * 2}%`, left: 0 },
    brightness: 75,
  },
  {
    position: { top: `${DEFAULT_VW}%`, left: `${DEFAULT_VW}%` },
    brightness: 90,
  },
  {
    position: { top: 0, left: `${DEFAULT_VW * 2 + DEFAULT_VW / 2}%` },
    center: true,
    brightness: 100,
  },
  {
    position: { top: `${DEFAULT_VW}%`, left: `${DEFAULT_VW * 4}%` },
    brightness: 90,
  },
  {
    position: { top: `${DEFAULT_VW * 2}%`, left: `${DEFAULT_VW * 5}%` },
    brightness: 75,
  },
  {
    position: { top: `${DEFAULT_VW * 3}%`, left: `${DEFAULT_VW * 5}%` },
    brightness: 50,
  },
  {
    position: { top: `${DEFAULT_VW * 4}%`, left: `${DEFAULT_VW * 4}%` },
    brightness: 50,
  },
  {
    position: { top: `${DEFAULT_VW * 5}%`, left: `${DEFAULT_VW * 3}%` },
    brightness: 25,
  },
  {
    position: { top: `${DEFAULT_VW * 5}%`, left: `${DEFAULT_VW * 2}%` },
    brightness: 25,
  },
  {
    position: { top: `${DEFAULT_VW * 4}%`, left: `${DEFAULT_VW}%` },
    brightness: 50,
  },
  { position: { top: `${DEFAULT_VW * 3}%`, left: 0 }, brightness: 50 },
];
