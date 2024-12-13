"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "../components/Modal/Modal";
import styles from "./page.module.css";
import Walking from "../../public/walking.gif";
import Timer from "../components/Timer/page";
import { useRouter } from "next/navigation";

const WalkingLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    console.log(isLoading);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/StandingCheck");
    }, 61000);
    console.log(isLoading);
  }, []);
  return (
    <div className={styles.main}>
      <Modal isOpen={isLoading} onClose={!isLoading} width={360}>
        <Timer getCount={60} />
        <Image
          src={Walking}
          alt="걷는 짤"
          unoptimized={true}
          width={360}
          height={360}
          style={{ objectFit: "cover" }}
        />
      </Modal>
    </div>
  );
};

export default WalkingLoading;
