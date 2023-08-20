import { useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody, vec3 } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

const Model = () => {
  const { nodes, materials } = useGLTF(import.meta.env.BASE_URL + '/scene.glb');
  const rigidBody = useRef(null);
  const [smoothedCameraPosition] = useState(() => vec3());
  const [smoothedCameraTarget] = useState(() => vec3());

  useFrame((state, delta) => {
    if (!rigidBody.current) return;

    const rigidBodyPosition = rigidBody.current.translation();
    const cameraPosition = vec3(rigidBodyPosition);

    cameraPosition.x += 2.5;
    cameraPosition.y += 1.5;
    cameraPosition.z += 2.5;

    const cameraTarget = vec3(rigidBodyPosition);
    cameraTarget.y += 0.5;

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
      position={[0, 0, 0]}
    >
      <group dispose={null}>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials['cockpit__spec_.001']}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.PaletteMaterial002}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.PaletteMaterial003}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.PaletteMaterial004}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.PaletteMaterial005}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.PaletteMaterial006}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials['guages__spec_.001']}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials['carpet__spec_.001']}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials['mclarenint__spec.001']}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_38.geometry}
          material={materials['Material.069']}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_55.geometry}
          material={materials['Tires2.004']}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
        <mesh
          geometry={nodes.Object_58.geometry}
          material={materials['BRAKES_4K.004']}
          position={[-0.045, -0.058, -0.103]}
          scale={0.648}
        />
      </group>
    </RigidBody>
  );
};

useGLTF.preload('/scene.glb');

export { Model };
