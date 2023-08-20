import { useState } from "react";
import { useFrame } from "@react-three/fiber";

export const Lights = () => {
  const [position, setPosition] = useState([5, 5, 0]);
  const [speed, setSpeed] = useState(0.1);

  useFrame(() => {
    if (speed === 0.1 && position[0] > 15) {
      setSpeed(-0.1);
    }
    if (speed === -0.1 && position[0] < -15) {
      setSpeed(0.1);
    }

    setPosition([
      position[0] + speed,
      position[1],
      position[2],
    ]);
  });

  return (
    <>
      <spotLight
        color={[1, 1, 1]}
        intensity={0.5}
        angle={0.5}
        penumbra={0.5}
        position={position}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={0.3}
        angle={0.9}
        penumbra={0.1}
        position={[-20, 3, 0]}
        castShadow
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={0.1}
        angle={1}
        penumbra={0.1}
        position={[100, 1, 0]}
        castShadow
      />
    </>
  );
};
