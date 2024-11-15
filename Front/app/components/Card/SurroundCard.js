import styles from "./page.module.css";
import Image from "next/image";
import Data from "../../../public/data.jpg";
import SurroundBtn from "../Button/SurroundBtn";

const SurroundCard = () => {
  const subText = "다른 사람들의 발걸음을\n구경해보세요";
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={Data}
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
        <div className={styles.subject}>수많은 데이터</div>
        <div className={styles.subject2}>{subText}</div>
      </div>
      <div className={styles.button}>
        <SurroundBtn />
      </div>
    </div>
  );
};

export default SurroundCard;
