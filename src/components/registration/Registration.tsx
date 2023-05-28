import styles from "./registration.module.css";
import RegistrationTopText from "./registrationTopText/RegistrationTopText";
import SignEmail from "../signEmail/SignEmail";
import UserName from "./userName/UserName";
import SignInPassword from "../signInPassword/SignInPassword";
import ConfrimPassword from "./confirmPassword/ConfirmPassword";
import EncoderUp from "./encoderUp/EncoderUp";

const Registration = () => {
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <RegistrationTopText />
        <div className={styles.content}>
          <SignEmail />
          <UserName />
          <SignInPassword />
          <ConfrimPassword />
        </div>
      </section>
      <EncoderUp />
    </div>
  );
};

export default Registration;
