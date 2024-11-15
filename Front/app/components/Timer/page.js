"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const Timer = ({ getCount }) => {
  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [count]);

  return <div className={styles.timer}>{count}</div>;
};

export default Timer;
