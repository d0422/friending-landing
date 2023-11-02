export type Position = {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
};

export type StyleOption = {
  center?: boolean;
  position: Position;
  brightness: number;
};

export type WordObject = {
  word: string;
  size: string;
  position: {
    top: number;
    left: number;
  };
  delay: number;
  duration: number;
};

export type RotateInfo = {
  rotateY?: string;
  translateX?: string;
  translateZ: string;
  left: string;
  zIndex: number;
};

export type CardInfo = {
  src: string;
  rotateInfo: RotateInfo;
};
