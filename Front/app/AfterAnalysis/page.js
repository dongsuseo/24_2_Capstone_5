"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { OrbitControls } from "@react-three/drei";
import { Insole } from "../../public/Insole";
import footResult from "../../public/footResult.png";
import result from "../../public/result.png";
const AfterAnalysis = () => {
  const str = "분석 완료!";
  const str2 = "양발 다 평발로 의심돼요"
  const str3 = (
    <>
      <span className={styles.boldText}>Left</span><br/>
      평균 데이터에 비해
      안쪽으로 <span className={styles.highlight}> 2%</span> 가까워요<br/>
    </>)
  const str4 = (
    <>
      <span className={styles.boldText}>Right</span><br/>
      평균 데이터에 비해
      안쪽으로 <span className={styles.highlight}>5%</span> 가까워요<br/>
    </>)
  const str5 = (
    <>
      <span className={styles.red}>-  평균 데이터</span> / <span className={styles.blue}>-  내 데이터</span>
    </>)
  return (
    <div className={styles.main}>
      {/* <div className={styles.text}>{str}</div> */}
      <div className={styles.result}>
        <div className={styles.header}>진단 결과</div>
        <div className={styles.foot}>
          <Image
              src={result}
              alt="분석 이미지"
              style={{
                objectFit: "none",
                // objectPosition: "60% 20%",
                overflow: "hidden",
              }}
            />
        </div>
        <div className={styles.textBox}>
          <div className={styles.explain}>{str5}</div>
          <div className={styles.resultText}>{str3}</div>
          <div className={styles.resultText}>{str4}</div>
        </div>
      </div>
      <div className={styles.result2}>
        <div className={styles.header2}>아치 추천</div>
        <div className={styles.foot}>
          <Image
              src={footResult}
              alt="분석 이미지"
              style={{
                height: "45vh",
                objectFit: "none",
                // objectPosition: "60% 20%",
                overflow: "hidden",
              }}
            />
        </div>
        <div className={styles.threeModel}>
          <Canvas
            camera={{ position: [0, 0, 0.3] }}
            style={{
              display: "flex",
              width: "100%", // 너비 설정
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
              scale={[1, 1, 1]}
            >
              <Insole />
            </group>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default AfterAnalysis;
