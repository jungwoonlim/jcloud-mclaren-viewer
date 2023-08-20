import { useLottie } from 'lottie-react';
import { useProgress } from '@react-three/drei';
import animationData from '../assets/loading.json'

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    animationData,
  };

  const { View } = useLottie(defaultOptions);
  const { progress } = useProgress();

  return (
    <div className='loading'>
      { View }
      <p>자동차 정보를 불러오고 있어요. {Math.floor(progress)}%</p>
      <span>처음 불러올 때는 시간이 좀 걸릴 수 있어요.</span>
    </div>
  );
};
