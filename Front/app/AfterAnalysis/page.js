"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styles from "./page.module.css";
import { OrbitControls } from "@react-three/drei";
import { Insole } from "../../public/Insole";
const AfterAnalysis = () => {
  return (
    <div className={styles.main}>
      <div>분석이 완료됐습니다.</div>
      <div className={styles.threeModel}>
        <Canvas
          camera={{ position: [0, 0, 0.3] }}
          style={{
            display: "flex",
            width: "80%", // 너비 설정
            height: "100%", // 높이 설정
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <OrbitControls />
          <ambientLight intensity={1} />
          <group
            rotation-x={Math.PI / 2} // X축 회전
            rotation-y={-Math.PI / 3} // Y축 회전
            rotation-z={Math.PI / 4} // Z축 회전, 대각선 아래 왼쪽으로 향하도록 설정
            scale={[2, 2, 2]}
          >
            <Insole />
          </group>
        </Canvas>
      </div>
    </div>
  );
};

export default AfterAnalysis;
