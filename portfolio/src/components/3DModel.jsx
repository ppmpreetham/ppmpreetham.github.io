import React from "react";
import { useGLTF } from "@react-three/drei";
const PI = Math.PI;

export function Model(props) {
  const { nodes, materials } = useGLTF("/portfolio.glb");
  return (
    <group {...props} dispose={null} rotation={[0, -PI / 2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        scale={[1, 0.103, 1]}
      />
      <group position={[-0.583, 0.266, 0]} scale={2.097}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["Desktop Material"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials.Glass}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-0.039, 0.241, 0.933]}
        rotation={[0, -0.316, 0]}
        scale={[0.071, 0.155, 0.155]}
      />
      <group position={[0.415, 0.24, -1.264]} scale={1.528}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["Book Cover"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials["Book Pages"]}
        />
      </group>
      <group
        position={[0.415, 0.299, -1.264]}
        rotation={[0, -0.093, 0]}
        scale={1.528}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["Book Cover 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials["Book Pages"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.Material}
        position={[0.114, 0.473, -0.784]}
        rotation={[Math.PI, 0.498, -Math.PI / 2]}
        scale={0.466}
      />
    </group>
  );
}

useGLTF.preload("/portfolio.glb");
