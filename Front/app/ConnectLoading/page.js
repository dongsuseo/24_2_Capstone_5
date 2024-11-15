"use client";
import styles from "./page.module.css";
import Modal from "../components/Modal/Modal";
import Image from "next/image";
import Walking from "../../public/walking.gif";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ConnectLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      router.push("/WalkingCheck");
    }, 5000);
  }, []);
  return (
    <div className={styles.main}>
      <Modal isOpen={isLoading} onClose={!isLoading} width={360}>
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

export default ConnectLoading;
