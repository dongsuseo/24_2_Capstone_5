"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { HashLoader } from "react-spinners";

const AnalysisLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const override = {
    marginBottom: "12%",
  };
  useEffect(() => {
    console.log(isLoading);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/AfterAnalysis");
    }, 11000);
    console.log(isLoading);
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.text}>A.I. 분석 중이에요</div>
      <HashLoader
        color="#1B64DA"
        loading={isLoading}
        cssOverride={override}
        size={130}
        speedMultiplier={0.7}
      />
    </div>
  );
};

export default AnalysisLoading;
