"use client";
import { useRouter } from "next/navigation";
import styles from "./Btn.module.css";

const AnalysisBtn = () => {
  const router = useRouter();
  const str = "바로 분석";
  const clickHandler = () => {
    router.push("/ConnectLoading");
  };
  return (
    <button onClick={clickHandler} className={styles.main}>
      {str}
    </button>
  );
};

export default AnalysisBtn;
