import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { useRouter } from "next/navigation"; // For Next.js routing

const PI = Math.PI;

// Define page mappings for each object
const objectPageMappings = {
  Cube: "/desk",
  Cube002: "/computer",
  Cube004: "/screen",
  Camera: "/camera",
  Plane001: "/book1",
  Plane002: "/book2",
  Cube003: "/projects",
  Brain: "/brain",
  Sphere: "/sphere",
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
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 1.2,
        ease: "power2.out",
      },
      0.3
    );
  };

  // Add object references
  const addMeshRef = (mesh, name) => {
    if (mesh) {
      meshRefs.current[name] = mesh;
    }
  };

  // Interactive props to add to mesh components
  const getInteractiveProps = (objectName) => ({
    ref: (mesh) => addMeshRef(mesh, objectName),
    onPointerOver: handlePointerOver,
    onPointerOut: handlePointerOut,
    onClick: (e) => handleClick(e, objectName),
  });

  return (
    <group ref={groupRef} {...props} dispose={null} rotation={[0, -PI / 2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        scale={[1, 0.103, 1]}
        {...getInteractiveProps("Cube")}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Desktop Material"]}
        position={[-0.583, 0.266, 0]}
        scale={2.097}
        {...getInteractiveProps("Cube002")}
      />
      <group position={[0.447, 0.327, -0.68]} scale={0.487}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Flipper}
          {...getInteractiveProps("Plane_1")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["Flipper Glow"]}
          {...getInteractiveProps("Plane_2")}
        />
      </group>
      <group position={[0.415, 0.24, -1.264]} scale={1.528}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Book Cover"]}
          {...getInteractiveProps("Plane001")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["Book Pages"]}
          {...getInteractiveProps("Plane001_1")}
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
          geometry={nodes.Plane002.geometry}
          material={materials["Book Cover 2"]}
          {...getInteractiveProps("Plane002")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["Book Pages"]}
          {...getInteractiveProps("Plane002_1")}
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
        {...getInteractiveProps("Cube003")}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Desktop Glass"]}
        position={[-0.561, 0.266, -1.547]}
        scale={2.097}
        {...getInteractiveProps("Cube004")}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Camera.geometry}
        material={materials.camera}
        position={[0.346, 0.353, 1.057]}
        scale={0.086}
        {...getInteractiveProps("Camera")}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Glass.001"]}
        position={[0.873, 0.291, 0.155]}
        scale={0.028}
        {...getInteractiveProps("Sphere")}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Brain.geometry}
        material={materials.material_0}
        position={[0, 0.31, 1.243]}
        scale={0.003}
        {...getInteractiveProps("Brain")}
      />
      <group
        position={[0.337, 0.273, 0.384]}
        rotation={[-Math.PI / 2, 0, 2.168]}
        scale={0.016}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_Material_0"].geometry}
          material={materials["Material.003"]}
          {...getInteractiveProps("Material_0")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_Material_0_1"].geometry}
          material={materials[".001"]}
          {...getInteractiveProps("Material_0_1")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_Material_0_2"].geometry}
          material={materials.material}
          {...getInteractiveProps("Material_0_2")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_Material_0_3"].geometry}
          material={materials[".002"]}
          {...getInteractiveProps("Material_0_3")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["������_Material_0_4"].geometry}
          material={materials[".003"]}
          {...getInteractiveProps("Material_0_4")}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/portfolio.glb");
