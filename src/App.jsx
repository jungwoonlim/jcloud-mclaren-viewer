import { Suspense } from 'react';
import { Renderer } from './renderer'
import { Canvas } from '@react-three/fiber';

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas shadows>
        <Renderer />
      </Canvas>
    </Suspense>
  );
};
