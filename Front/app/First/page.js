import AnalysisBtn from "../components/Button/AnalysisBtn"
import SurroundBtn from "../components/Button/SurroundBtn";
import styles from "./page.module.css";

const First = () =>{

    return(
      <div>
        <div className={styles.main}>
            <AnalysisBtn/>
            <SurroundBtn/>
        </div>
      </div>
    );
}

export default First;