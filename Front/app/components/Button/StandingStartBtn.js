"use client";
import { useRouter } from "next/navigation";
import styles from "./Btn.module.css";

const StandingStartBtn = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/StandLoading");
  };
  return (
    <button onClick={clickHandler} className={styles.standingStart}>
      시작
    </button>
  );
};

export default StandingStartBtn;
