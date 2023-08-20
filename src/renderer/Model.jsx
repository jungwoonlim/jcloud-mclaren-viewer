import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { nodes, materials } = useGLTF('/scene.glb')

  return (
    <group
      dispose={null}
      position={[4, 1, 0]}
    >
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
  );
};

useGLTF.preload('/scene.glb');

export { Model };
