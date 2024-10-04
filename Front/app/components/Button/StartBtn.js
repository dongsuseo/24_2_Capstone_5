'use client';
import { useRouter } from "next/navigation";
import styles from "./Btn.module.css"

const AnalysisBtn = () =>{
    const router = useRouter();
    const clickHandler = () =>{
        router.push("/Analysis");
    }
    return(
        <button onClick={clickHandler} className={styles.main}>시작</button>
    );
}

export default AnalysisBtn;