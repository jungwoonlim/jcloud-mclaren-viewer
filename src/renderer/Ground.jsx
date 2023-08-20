import { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";
import { RigidBody } from "@react-three/rapier";

export const Ground = () => {
  const [roughnessMap, normalMap] = useLoader(TextureLoader, [
    import.meta.env.BASE_URL + 'groundTexture/roughness.jpg',
    import.meta.env.BASE_URL + 'groundTexture/normal.jpg',
  ]);

  useEffect(() => {
    [normalMap, roughnessMap].forEach((texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(5, 5);
    });

    normalMap.encoding = LinearEncoding;
  }, [normalMap, roughnessMap]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const goTime = -time * 0.128;

    roughnessMap.offset.set(0, goTime % 1);
    normalMap.offset.set(0, goTime % 1);
  });

  return (
    <RigidBody
      type="fixed"
      restitution={0.2}
      friction={0}
      rotation-x={-Math.PI * 0.5}
    >
      <mesh
        castShadow
        receiveShadow
      >
        <planeGeometry args={[30, 30]} />
        <MeshReflectorMaterial
          envMapIntensity={0}
          normalMap={normalMap}
          normalScale={[0.15, 0.15]}
          roughnessMap={roughnessMap}
          dithering={true}
          color={[0.015, 0.015, 0.015]}
          roughness={0.7}
          blur={[1000, 400]}
          mixBlur={30}
          mixStrength={80}
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0.01}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          debug={0}
          reflectorOffset={0.2}
        />
      </mesh>
    </RigidBody>
  );
};
