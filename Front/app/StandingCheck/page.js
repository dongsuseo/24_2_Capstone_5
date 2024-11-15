"use client";

import styles from "./page.module.css";
import StandingStartBtn from "../components/Button/StandingStartBtn";
const Standing = () => {
  const str = "걸음 측정이 완료 됐습니다.";
  const str2 = (
    <>
      시작 버튼을 누르고 <br />
      <span className={styles.highlight}>10초</span> 동안
      <br />
      가만히 서 있어 주세요!
    </>
  );
  return (
    <div className={styles.main}>
      <div className={styles.text}>{str}</div>
      <div className={styles.text2}>{str2}</div>
      <StandingStartBtn />
    </div>
  );
};

export default Standing;
