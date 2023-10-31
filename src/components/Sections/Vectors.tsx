import Image from 'next/image';

const Vector2 = () => {
  return (
    <div className="absolute w-[20vw] h-[20vw] top-0 left-0 z-10">
      <Image
        src={'/vector2.png'}
        alt="vector"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

const Vector3 = () => {
  return (
    <div className="absolute w-[10.4vw] h-[10.4vw] top-[10vw] left-[15vw]">
      <Image
        src={'/vector3.png'}
        alt="vector"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export const Vectors = () => {
  return (
    <div className="w-full h-[20vw] relative">
      <Vector2 />
      <Vector3 />
    </div>
  );
};
