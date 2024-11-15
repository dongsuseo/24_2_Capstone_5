'use client';
import { useRouter } from "next/navigation";
import styles from "./Btn.module.css"

const SurroundBtn = () =>{
    const router = useRouter();
    const str = "둘러보기"
    const clickHandler = () =>{
        router.push("/Surround");
    }
    return(
        <button onClick={clickHandler} className={styles.main}>{str}</button>
    );
}

export default SurroundBtn;