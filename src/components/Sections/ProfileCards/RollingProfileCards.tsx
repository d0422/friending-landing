import { Text } from '../../common/Text';
import { Card } from './Card';
import { cardRollingStyle } from './cardRollingStyle';
import { useRolling } from '@/hooks/useRolling';

export const RollingProfileCards = () => {
  const cardInfo = ['profile1', 'profile2', 'profile5', 'profile3', 'profile4'];
  const style = useRolling(cardRollingStyle, 'left');

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="relative h-[30vw] w-[80vw]">
        {cardInfo.map((src, i) => (
          <Card key={src + i} src={src} rotateInfo={style[i]} />
        ))}
      </div>
      <div className="mt-[15vw]">
        <Text>원하는 카드를</Text>
        <Text>필요한 순간에</Text>
      </div>
    </div>
  );
};
