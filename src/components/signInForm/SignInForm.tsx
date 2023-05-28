import styles from "./signInForm.module.css";
import { Outlet } from "react-router-dom";
import SignInTopText from "../signInTopText/SignInTopText";
import SignEmail from "../signEmail/SignEmail";
import SignInPassword from "../signInPassword/SignInPassword";
import SignInButton from "../signInButton/SignInButton";
import SignInSocialMedia from "../signInSocialMedia/SignInSocialMedia";
import SignInEncoder from "../signInEncoder/SignInEncoder";

const SignInForm = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.form}>
          <SignInTopText />
          <div className={styles.content}>
            <SignEmail />
            <SignInPassword />
            <SignInButton />
            <SignInSocialMedia />
          </div>
        </section>
        <SignInEncoder />
      </div>
      <Outlet />
    </>
  );
};

export default SignInForm;
