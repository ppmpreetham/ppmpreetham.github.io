"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Model } from "./3DModel";
import * as THREE from "three";
import { gsap } from "gsap";

declare global {
  interface Window {
    setAnimatingCamera: React.Dispatch<React.SetStateAction<boolean>>;
  }
}

const PI = Math.PI;

const CameraController = () => {
  const { camera } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    camera.position.set(0, 1, 3);
    camera.rotation.set(0, 0, 0);
  }, [camera]);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      if (isAnimating) return;

      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;

      setMousePosition({ x, y });

      const rotationX = -y * 0.1;
      const rotationY = -x * 0.1;

      camera.rotation.x = THREE.MathUtils.lerp(
        camera.rotation.x,
        rotationX,
        0.1
      );
      camera.rotation.y = THREE.MathUtils.lerp(
        camera.rotation.y,
        rotationY,
        0.1
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [camera, isAnimating]);

  window.setAnimatingCamera = setIsAnimating;

  return null;
};

const Full3DView = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <CameraController />
        <PerspectiveCamera
          makeDefault
          position={[0, 1, 3]}
          rotation={[0, 0, 0]}
          fov={60}
        />
        <ambientLight intensity={5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Model />
      </Canvas>
    </div>
  );
};

export default Full3DView;
