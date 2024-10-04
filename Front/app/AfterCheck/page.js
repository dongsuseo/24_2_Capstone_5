import styles from "./page.module.css";
import StartBtn from "../components/Button/StartBtn"
const AfterCheck = () => {
    const str= "기기 연결이 확인 됐습니다! \n시작 버튼을 누르고\n1분간 편하게 걸어주세요!";
    return(
        <div className={styles.main}>
            <div className={styles.text}>
                {str}
            </div>
            <StartBtn/>
        </div>
    )
}

export default AfterCheck;