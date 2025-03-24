import React, { useRef, useState, useContext } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { useRouter } from "next/navigation"; // For Next.js routing

const PI = Math.PI;

// Define page mappings for each object
const objectPageMappings = {
  Cube: "/desk",
  Cube002_1: "/computer",
  Cube002_2: "/screen",
  Cube001: "/smartphone",
  Plane001_1: "/book1",
  Plane001_2: "/book1-pages",
  Plane002_1: "/book2",
  Plane002_2: "/book2-pages",
  Cube003: "/projects",
};

export function Model(props) {
  const { nodes, materials } = useGLTF("/portfolio.glb");
  const router = useRouter();
  const { camera } = useThree();

  // Store original materials to restore after hover
  const [hoveredMesh, setHoveredMesh] = useState(null);
  const [animatingMesh, setAnimatingMesh] = useState(null);
  const originalMaterials = useRef({});
  const groupRef = useRef();
  const meshRefs = useRef({});

  // Hover event handlers
  const handlePointerOver = (e) => {
    if (animatingMesh) return; // Don't allow hover effects during animation

    e.stopPropagation();
    if (e.object.material) {
      const meshId = e.object.uuid;
      // Store original material if not already stored
      if (!originalMaterials.current[meshId]) {
        originalMaterials.current[meshId] = e.object.material;
      }
      // Set mesh to white material
      e.object.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      setHoveredMesh(meshId);
    }
  };

  const handlePointerOut = (e) => {
    // if (animatingMesh) return; // Don't restore material during animation

    e.stopPropagation();
    const meshId = e.object.uuid;
    // Restore original material
    if (hoveredMesh === meshId && originalMaterials.current[meshId]) {
      e.object.material = originalMaterials.current[meshId];
      setHoveredMesh(null);
    }
  };

  // Click handler with GSAP animation
  const handleClick = (e, objectName) => {
    e.stopPropagation();

    // Prevent multiple animations
    if (animatingMesh) return;
    setAnimatingMesh(e.object.uuid);

    // Get the clicked mesh
    const mesh = e.object;
    const meshId = e.object.uuid;
    // Restore original material
    e.object.material = originalMaterials.current[meshId];

    const meshWorldPosition = new THREE.Vector3();
    mesh.getWorldPosition(meshWorldPosition);

    // Store original positions and rotations
    const originalPosition = mesh.position.clone();
    const originalRotation = mesh.rotation.clone();
    const originalGroupRotation = groupRef.current.rotation.clone();
    const originalGroupPosition = groupRef.current.position.clone();

    // Calculate target position (in front of camera)
    const targetPosition = new THREE.Vector3(2, 0, -3);
    targetPosition.applyMatrix4(camera.matrixWorld);

    // Animation timeline
    const timeline = gsap.timeline({
      onComplete: () => {
        // Navigate to the corresponding page
        const pagePath = objectPageMappings[objectName] || "/";

        // Add a slight delay before navigation
        gsap.to(
          {},
          {
            duration: 0.3,
            onComplete: () => {
              // Add upward animation before navigation
              gsap.to(mesh.position, {
                x: mesh.position.x + 2,
                duration: 0.7,
                ease: "power2.inOut",
                onComplete: () => router.push(pagePath),
              });
            },
          }
        );
      },
    });

    // First animation: rotate the object
    timeline.to(
      mesh.rotation,
      {
        x: mesh.rotation.x + PI,
        z: mesh.rotation.z + PI,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    // Second animation: move the object closer to camera
    timeline.to(
      mesh.position,
      {
        // x: targetPosition.x - groupRef.current.position.x,
        // y: targetPosition.y - groupRef.current.position.y,
        // z: targetPosition.z - groupRef.current.position.z,
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 1.2,
        ease: "power2.out",
      },
      0.3
    );

    // Scale up the object
    // timeline.to(
    //   mesh.scale,
    //   {
    //     x: mesh.scale.x * 2,
    //     y: mesh.scale.y * 2,
    //     z: mesh.scale.z * 2,
    //     duration: 1,
    //     ease: "power2.inOut",
    //   },
    //   0.3
    // );
  };

  // Add object references
  const addMeshRef = (mesh, name) => {
    if (mesh) {
      meshRefs.current[name] = mesh;
    }
  };

  return (
    <group ref={groupRef} {...props} dispose={null} rotation={[0, -PI / 2, 0]}>
      <mesh
        ref={(mesh) => addMeshRef(mesh, "Cube")}
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        scale={[1, 0.103, 1]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={(e) => handleClick(e, "Cube")}
      />
      <group position={[-0.583, 0.266, 0]} scale={2.097}>
        <mesh
          ref={(mesh) => addMeshRef(mesh, "Cube002_1")}
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["Desktop Material"]}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={(e) => handleClick(e, "Cube002_1")}
        />
        <mesh
          ref={(mesh) => addMeshRef(mesh, "Cube002_2")}
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials.Glass}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={(e) => handleClick(e, "Cube002_2")}
        />
      </group>
      <mesh
        ref={(mesh) => addMeshRef(mesh, "Cube001")}
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-0.039, 0.241, 0.933]}
        rotation={[0, -0.316, 0]}
        scale={[0.071, 0.155, 0.155]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={(e) => handleClick(e, "Cube001")}
      />
      <group position={[0.415, 0.24, -1.264]} scale={1.528}>
        <mesh
          ref={(mesh) => addMeshRef(mesh, "Plane001_1")}
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["Book Cover"]}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={(e) => handleClick(e, "Plane001_1")}
        />
        <mesh
          ref={(mesh) => addMeshRef(mesh, "Plane001_2")}
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials["Book Pages"]}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={(e) => handleClick(e, "Plane001_2")}
        />
      </group>
      <group
        position={[0.415, 0.299, -1.264]}
        rotation={[0, -0.093, 0]}
        scale={1.528}
      >
        <mesh
          ref={(mesh) => addMeshRef(mesh, "Plane002_1")}
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["Book Cover 2"]}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={(e) => handleClick(e, "Plane002_1")}
        />
        <mesh
          ref={(mesh) => addMeshRef(mesh, "Plane002_2")}
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials["Book Pages"]}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={(e) => handleClick(e, "Plane002_2")}
        />
      </group>
      <mesh
        ref={(mesh) => addMeshRef(mesh, "Cube003")}
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.Material}
        position={[0.114, 0.473, -0.784]}
        rotation={[Math.PI, 0.498, -Math.PI / 2]}
        scale={0.466}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={(e) => handleClick(e, "Cube003")}
      />
    </group>
  );
}

useGLTF.preload("/portfolio.glb");
