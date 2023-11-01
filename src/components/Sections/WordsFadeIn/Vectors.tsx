import { Vector } from '../../common/Vector';

export const Vectors = () => {
  return (
    <div className="w-full h-[20vw] relative">
      <Vector src="/vector2.png" width="20vw" height="20vw" top="0" left="0" />
      <Vector
        src="/vector3.png"
        width="10.4vw"
        height="10.4vw"
        top="10vw"
        left="15vw"
      />
    </div>
  );
};
