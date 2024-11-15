"use client";
import { useRouter } from "next/navigation";
import styles from "./Btn.module.css";

const WalkingStartBtn = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/WalkingLoading");
  };
  return (
    <button onClick={clickHandler} className={styles.walkingStart}>
      시작
    </button>
  );
};

export default WalkingStartBtn;
