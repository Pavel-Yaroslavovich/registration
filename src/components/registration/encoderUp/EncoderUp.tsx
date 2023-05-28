import styles from "./encoderUp.module.css";
import coderUp from "../../../image/encoderUp.png";

const EncoderUp = () => {
  return (
    <section className={styles.promo}>
      <img src={coderUp} alt="photo coder" className="promo" />
    </section>
  );
};

export default EncoderUp;
