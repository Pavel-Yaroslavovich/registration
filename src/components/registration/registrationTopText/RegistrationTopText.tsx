import styles from "./registrationTopText.module.css";
import { Link } from "react-router-dom";

const RegistrationTopText = () => {
  return (
    <>
      <a href="##" className={styles.logo}>
        Your Logo
      </a>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign up</h1>
        <p className={styles.subtitle}>If you don't have an account register</p>
        <p className={styles.subtitle}>
          You can
          <Link className={styles.toLink} to="/">
            <span> Login here !</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegistrationTopText;
