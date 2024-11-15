"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "../components/Modal/Modal";
import styles from "./page.module.css";
import Standing from "../../public/attention.jpg";
import Timer from "../components/Timer/page";
import { useRouter } from "next/navigation";
const StandLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    console.log(isLoading);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/AnalysisLoading");
    }, 11000);
    console.log(isLoading);
  }, []);
  return (
    <div className={styles.main}>
      <Modal isOpen={isLoading} onClose={!isLoading} width={360}>
        <Timer getCount={10} />
        <Image
          src={Standing}
          alt="걷는 짤"
          unoptimized={true}
          width={360}
          height={360}
          style={{
            objectFit: "cover",
            marginBottom: "10%",
            marginTop: "6%",
            backgroundColor: "#f9f9f9",
          }}
        />
      </Modal>
    </div>
  );
};

export default StandLoading;
