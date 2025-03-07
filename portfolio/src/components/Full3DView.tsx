"use client";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Model } from "./3DModel";

const PI = Math.PI;
const Full3DView = () => {
  useEffect(() => {}, []);

  return (
    <div className="h-screen w-screen">
      <Canvas>
        {/* <OrbitControls /> */}
        <PerspectiveCamera
          makeDefault
          position={[0, 1, 3]}
          rotation={[0, 0, 0]}
        />
        <ambientLight intensity={5} />
        <Model />
      </Canvas>
    </div>
  );
};

export default Full3DView;
