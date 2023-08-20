import { PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Ground";
import { Lights } from "./Lights";
import { Model } from "./Model";

export const Renderer = () => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[4, 2, 4]}
      />
      <color
        args={[0, 0, 0]}
        attach="background"
      />
      <Lights />
      <Ground />
      <Model />
    </>
  );
};
