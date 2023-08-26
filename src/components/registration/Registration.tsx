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
  const [registPass, setRegistPass] = useState("");
  const [correctRegistPass, setCorrectRegistPass] = useState<string | null>(
    null
  );
  const [errorRegistPass, setErrorRegistPass] = useState<string | null>(null);
  localStorage.setItem("password", registPass);

  const handleChangeBtnRegis = (event: any) => {
    setRegistPass(event.target.value);
  };

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
