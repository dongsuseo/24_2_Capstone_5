import styles from "./page.module.css";
import Image from "next/image";
import MainPic from "../public/MainPicture.jpg";
import B_foot from "../public/B_foot.jpg";
import AI from "../public/AI.jpg";
import AnalysisCard from "./components/Card/AnalysisCard";
import SurroundCard from "./components/Card/SurroundCard";

const First = () => {
  const Text2 =
    "평발 때문에 고민이신가요?\n발목 통증 골반 통증 No!\n평발을 교정해보세요!";
  const Text3 = "AI를 이용한 개인 맞춤형 서비스\n개인 맞춤 깔창 측정";
  return (
    <div className={styles.container}>
      {/* <div className={styles.section1}>
        <Image
          src={MainPic}
          alt="메인 일러스트"
          fill
          style={{ objectFit: "cover", maxWidth: "875px" }}
        />
        <div className={styles.logo}>퍼펙트 워커,</div>
        <div className={styles.subText}>발걸음 교정 서비스</div>
      </div>
      <div className={styles.section2}>
        <div className={styles.firstImg}>
          <Image
            src={B_foot}
            alt="발 일러스트"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "65% 20%",
              overflow: "hidden",
              borderRadius: "10%",
            }}
          />
        </div>
        <div className={styles.section2Text}>{Text2}</div>
      </div> */}
      {/* <div className={styles.section3}>
        <div className={styles.section3Text}>{Text3}</div>
        <div className={styles.secondImg}>
          <Image
            src={AI}
            alt="AI 일러스트"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "65% 20%",
              overflow: "hidden",
              borderRadius: "10%",
            }}
          />
        </div>
      </div> */}
      <div className={styles.section4}>
        <AnalysisCard />
        <SurroundCard />
      </div>
    </div>
  );
};

export default First;
