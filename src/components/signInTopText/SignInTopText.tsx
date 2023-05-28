import styles from "./signInTopText.module.css";
import { Link } from "react-router-dom";

const SignInTopText = () => {
  return (
    <>
      <a href="##" className={styles.logo}>
        Your Logo
      </a>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign in</h1>
        <p className={styles.subtitle}>If you don't have an account register</p>
        <p className={styles.subtitle}>
          You can
          <Link className={styles.toLink} to="registration">
            <span> Register here !</span>
          </Link>
        </p>
      </div>
    </>
  );
};
export default SignInTopText;
