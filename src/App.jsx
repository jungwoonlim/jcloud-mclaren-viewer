import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loading } from './components/Loading';
import { MainContainer } from './components/MainContainer';
const Renderer = lazy(() => {
  return import('./renderer')
    .then(({ Renderer }) => ({ default: Renderer }))
});

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas shadows>
        <Renderer />
      </Canvas>
      <MainContainer />
    </Suspense>
  );
};
