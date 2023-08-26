import { useState } from "react";
import styles from "./registPassword.module.css";
import password from "../../../image/password.svg";
import eyeShow from "../../../image/eyeTrue.png";
import eyeClose from "../../../image/eyeFalse.png";

interface Iprops {
  registPass: string;
  correctRegistPass: string | null;
  errorRegistPass: string | null;
  setRegistPass: (target: string) => void;
  setCorrectRegistPass: (str: string) => void;
  setErrorRegistPass: (str: string | null) => void;
}

const RegistPassword = ({
  registPass,
  setRegistPass,
  correctRegistPass,
  setCorrectRegistPass,
  errorRegistPass,
  setErrorRegistPass,
}: Iprops) => {
  const [isShow, setIsShow] = useState(false);

  const [isOpenedError, setIsOpenedError] = useState(false);

  const passShowTogle = () => {
    setIsShow(!isShow);
  };

  const validPassword = (registPass: string) => {
    return /[A-Z]/.test(registPass) && /[0-9]/.test(registPass);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!validPassword(event.target.value)) {
      setErrorRegistPass("Enter one capital letter and one number");
      setIsOpenedError(true);
    } else if (validPassword(event.target.value)) {
      setCorrectRegistPass("Correct password");
      setIsOpenedError(false);
    } else {
      setErrorRegistPass(null);
    }
    setRegistPass(event.target.value);
  };

  return (
    <div className={styles.inputBox}>
      <label className={styles.inputInfo} htmlFor="password">
        Password
      </label>
      <div className={styles.passBlock}>
        <label htmlFor="password">
          <img src={password} alt="password" />
        </label>
        <input
          className={styles.inputPassword}
          type={isShow ? "text" : "password"}
          name="password"
          id="password"
          maxLength={36}
          value={registPass}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {isShow ? (
          <img
            className={styles.eye}
            src={eyeShow}
            alt="eye show"
            onClick={passShowTogle}
          />
        ) : (
          <img
            className={styles.eye}
            src={eyeClose}
            alt="eye close"
            onClick={passShowTogle}
          />
        )}
      </div>
      <hr className={styles.line} />
      {isOpenedError ? (
        <h5 className={styles.errorPassword} style={{ color: "red" }}>
          {errorRegistPass}
        </h5>
      ) : (
        <h5 className={styles.errorPassword} style={{ color: "green" }}>
          {correctRegistPass}
        </h5>
      )}
    </div>
  );
};

export default RegistPassword;
