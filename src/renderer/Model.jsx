import { useSelector } from 'react-redux';
import { useGLTF } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { RigidBody, vec3 } from '@react-three/rapier';
import { useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const model = useLoader(
    GLTFLoader,
    import.meta.env.BASE_URL + 'model/scene.gltf',
  );
  const rigidBody = useRef(null);
  const position = useSelector(state => state.position);
  const [smoothedCameraPosition] = useState(() => vec3());
  const [smoothedCameraTarget] = useState(() => vec3());
  
  useEffect(() => {
    model.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [model]);

  useFrame((state, delta) => {
    if (!rigidBody.current || !position) return;
    
    const time = state.clock.getElapsedTime();
    const group = model.scene.children[0].children[0].children[0].children[0];

    group.children[1].rotation.x = time * 2;
    group.children[2].rotation.x = time * 2;
    group.children[3].rotation.x = time * 2;
    group.children[4].rotation.x = time * 2;

    const {
      cameraPosition: nextCameraPosition,
      targetPosition: nextTargetPosition,
    } = position;

    const rigidBodyPosition = rigidBody.current.translation();
    const cameraPosition = vec3(rigidBodyPosition);
    cameraPosition.x += nextCameraPosition.x;
    cameraPosition.y += nextCameraPosition.y;
    cameraPosition.z += nextCameraPosition.z;

    const cameraTarget = vec3(rigidBodyPosition);
    cameraTarget.x += nextTargetPosition.x;
    cameraTarget.y += nextTargetPosition.y;
    cameraTarget.z += nextTargetPosition.z;

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
    >
      <primitive object={model.scene} />
    </RigidBody>
  );
};

useGLTF.preload('/jcloud-mclaren-viewer/model/scene.gltf');

export { Model };
