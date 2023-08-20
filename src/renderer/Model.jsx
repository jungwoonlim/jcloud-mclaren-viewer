import { useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { RigidBody, vec3 } from "@react-three/rapier";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const model = useLoader(
    GLTFLoader,
    import.meta.env.BASE_URL + 'model/scene.gltf',
  );
  const rigidBody = useRef(null);
  const [smoothedCameraPosition] = useState(() => vec3([2.5, 1.5, 2.5]));
  const [smoothedCameraTarget] = useState(() => vec3([0.15, 0.5, 0.25]));
  
  useFrame((state, delta) => {
    if (!rigidBody.current) return;
    
    const time = state.clock.getElapsedTime();
    const group = model.scene.children[0].children[0].children[0].children[0];

    group.children[1].rotation.x = time * 2;
    group.children[2].rotation.x = time * 2;
    group.children[3].rotation.x = time * 2;
    group.children[4].rotation.x = time * 2;

    const rigidBodyPosition = rigidBody.current.translation();
    const cameraPosition = vec3(rigidBodyPosition);

    cameraPosition.x += 2.5;
    cameraPosition.y += 1.5;
    cameraPosition.z += 2.5;

    const cameraTarget = vec3(rigidBodyPosition);
    cameraTarget.x += 0.15;
    cameraTarget.y += 0.5;
    cameraTarget.z += 0.25;

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);
  });

  return (
    <RigidBody
      ref={rigidBody}
      canSleep={false}
      restitution={0.2}
      friction={1} 
      linearDamping={0.5}
      angularDamping={0.5}
      position={[0, 2, 0]}
    >
      <primitive object={model.scene} />;
    </RigidBody>
  );
};

useGLTF.preload('/jcloud-mclaren-viewer/model/scene.gltf');

export { Model };
