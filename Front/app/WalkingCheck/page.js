"use client";
import styles from "./page.module.css";
import WalkingStartBtn from "../components/Button/WalkingStartBtn";

const WalkingCheck = () => {
  const str = "기기 연결이 확인 됐습니다!";
  const str2 = (
    <>
      시작 버튼을 누르고 <br />
      <span className={styles.highlight}>1분</span> 동안 편하게 걸어주세요!
    </>
  );
  return (
    <div className={styles.main}>
      <div className={styles.text}>{str}</div>
      <div className={styles.text2}>{str2}</div>
      <WalkingStartBtn />
    </div>
  );
};

export default WalkingCheck;
