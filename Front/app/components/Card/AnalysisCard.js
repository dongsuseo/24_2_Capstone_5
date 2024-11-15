import styles from "./page.module.css";
import Image from "next/image";
import Analysis from "../../../public/analysis.jpg";
import AnalysisBtn from "../Button/AnalysisBtn";

const AnalysisCard = () => {
  const subText = "잠깐의 검사로\n자신의 발을 검사해보세요.";
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={Analysis}
          alt="분석 이미지"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "60% 20%",
            overflow: "hidden",
          }}
        />
      </div>
      <div className={styles.header}>
        <div className={styles.subject}>A.I. 맞춤 분석</div>
        <div className={styles.subject2}>{subText}</div>
      </div>
      <div className={styles.button}>
        <AnalysisBtn />
      </div>
    </div>
  );
};

export default AnalysisCard;
