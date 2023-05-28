import styles from "./signInSocialMedia.module.css";
import facebook from "../../image/Facebook.svg";
import apple from "../../image/apple.svg";
import google from "../../image/google.svg";

const SignInSocialMedia = () => {
  return (
    <div className={styles.social}>
      <span className={styles.info}>or continue with</span>
      <div className={styles.socialItems}>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.apple.com/">
          <img src={apple} alt="apple" />
        </a>
        <a href="https://www.google.com/">
          <img src={google} alt="google" />
        </a>
      </div>
    </div>
  );
};

export default SignInSocialMedia;
