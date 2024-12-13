"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three"; // THREE를 불러옵니다.

export function Insole(props) {
  const { nodes, materials } = useGLTF("/models/insole.gltf");
  const modelRef = useRef();

  useFrame(() => {
    // Rotate the model around the world's y-axis
    modelRef.current.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), 0.005);
  });
  

  return (
    <>
      {/* Group for the 3D Model */}
      <group {...props} dispose={null} ref={modelRef} style={{ 
      transform: 'scale(1)', /* 확대 방지 */
      touchAction: 'none', /* 터치 확대/축소 방지 */
      pointerEvents: 'none' /* 마우스 및 터치 포인터 방지 */
    }}>
        <group position={[-0.007, -0.016, 0.018]} rotation={[-0.121, 0, 3.121]}>
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials["vlozka_low-retopo"]}
          />
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials["vlozka_low-retopo"]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/models/insole.gltf");
