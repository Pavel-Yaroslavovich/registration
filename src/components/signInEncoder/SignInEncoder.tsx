import styles from "./signInEncoder.module.css";
import encoder from "../../image/encoder.png";

const SignInEncoder = () => {
  return (
    <section className={styles.promo}>
      <img src={encoder} alt="Saly" className="promo__image" />
    </section>
  );
};

export default SignInEncoder;
