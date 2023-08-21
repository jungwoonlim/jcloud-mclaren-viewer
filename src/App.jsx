import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loading } from './components/Loading';
import { MainContainer } from './components/MainContainer';
import { useProgress } from '@react-three/drei';

const Renderer = lazy(() => {
  return import('./renderer')
    .then(({ Renderer }) => ({ default: Renderer }))
});

export const App = () => {
  const { progress } = useProgress();

  return (
    <Suspense fallback={<Loading />}>
      <Canvas shadows>
        <Renderer />
      </Canvas>
      {progress >= 100 ? <MainContainer /> : <></>}
    </Suspense>
  );
};
