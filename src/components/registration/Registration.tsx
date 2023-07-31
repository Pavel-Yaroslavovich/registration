import { useState } from "react";
import styles from "./registration.module.css";
import RegistrationTopText from "./registrationTopText/RegistrationTopText";
import RegistEmail from "./registEmail/RegistEmail";
import UserName from "./userName/UserName";
import RegistPassword from "./registPassword/RegistPassword";
import ConfrimPassword from "./confirmPassword/ConfirmPassword";
import EncoderUp from "./encoderUp/EncoderUp";
import RegistButton from "./registButton/RegistButton";

const Registration = () => {
  const [registPass, setRegistPass] = useState<string>("");
  const [correctRegistPass, setCorrectRegistPass] = useState<any | null>(null);
  const [errorRegistPass, setErrorRegistPass] = useState<any | null>(null);
  localStorage.setItem("password", registPass);

  const handleChangeBtnRegis = (event: any): void => {
    setRegistPass(event.target.value);
  };
  console.log(registPass);

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <RegistrationTopText />
        <div className={styles.content}>
          <RegistEmail />
          <UserName />
          <RegistPassword
            registPass={registPass}
            setRegistPass={setRegistPass}
            correctRegistPass={correctRegistPass}
            setCorrectRegistPass={setCorrectRegistPass}
            errorRegistPass={errorRegistPass}
            setErrorRegistPass={setErrorRegistPass}
          />
          <ConfrimPassword registPass={registPass} />
          <RegistButton
            btnRegist={handleChangeBtnRegis}
            registPass={registPass}
            correctRegistPass={correctRegistPass}
            errorRegistPass={errorRegistPass}
          />
        </div>
      </section>
      <EncoderUp />
    </div>
  );
};

export default Registration;
