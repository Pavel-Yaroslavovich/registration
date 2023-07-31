import { useState } from "react";
import styles from "./signInForm.module.css";
import SignInTopText from "../signInTopText/SignInTopText";
import SignEmail from "../signEmail/SignEmail";
import SignInPassword from "../signInPassword/SignInPassword";
import SignInButton from "../signInButton/SignInButton";
import SignInSocialMedia from "../signInSocialMedia/SignInSocialMedia";
import SignInEncoder from "../signInEncoder/SignInEncoder";

const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  let registEmail: string | null = localStorage.getItem("email");
  let registPassword: string | null = localStorage.getItem("password");

  const dataСhecking = (): void => {
    if (email.length === 0 && pass.length === 0) {
      alert("Введите данные");
    } else if (email === registEmail && pass === registPassword) {
      alert("true");
    } else {
      alert("false");
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <SignInTopText />
        <div className={styles.content}>
          <SignEmail email={email} setEmail={setEmail} />
          <SignInPassword pass={pass} setPass={setPass} />
          <SignInButton dataСhecking={dataСhecking} />
          <SignInSocialMedia />
        </div>
      </section>
      <SignInEncoder />
    </div>
  );
};

export default SignInForm;
