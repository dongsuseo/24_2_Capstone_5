'use client';
import { useRouter } from "next/navigation";
import styles from "./Btn.module.css"

const AnalysisBtn = () =>{
    const router = useRouter();
    const str = "나의 발걸음\n분석"
    const clickHandler = () =>{
        router.push("/AfterCheck");
    }
    return(
        <button onClick={clickHandler} className={styles.main}>{str}</button>
    );
}

export default AnalysisBtn;