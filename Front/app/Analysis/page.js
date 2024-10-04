import Image from "next/image";
import foot from "../public/foot.png";
import styles from "./page.module.css";
const Analysis = () =>{
    return(
    <div className={styles.main}>
        <Image src={foot} alt="foot img" width={700} height={1000}/>
    </div>)
}

export default Analysis;