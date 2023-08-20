import { Physics } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Ground";
import { Lights } from "./Lights";
import { Model } from "./Model";

export const Renderer = () => {
  return (
    <Physics debug={false}>
      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[0, 0, 0]}
      />
      <color
        args={[0, 0, 0]}
        attach="background"
      />
      <Lights />
      <Ground />
      <Model />
    </Physics>
  );
};
