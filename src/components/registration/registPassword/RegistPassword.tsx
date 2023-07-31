import styles from "./registPassword.module.css";
import password from "../../../image/password.svg";
import eyeShow from "../../../image/eyeTrue.png";
import eyeClose from "../../../image/eyeFalse.png";
import { useState } from "react";

const RegistPassword = (props: any) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const [isOpenedError, setIsOpenedError] = useState<boolean>(false);

  const passShowTogle = (): void => {
    setIsShow(!isShow);
  };

  const validPassword = (registPass: string) => {
    return /[A-Z]/.test(registPass) && /[0-9]/.test(registPass);
  };

  const handleChange = (event: any) => {
    if (!validPassword(event.target.value)) {
      props.setErrorRegistPass("Enter one capital letter and one number");
      setIsOpenedError(true);
    } else if (validPassword(event.target.value)) {
      props.setCorrectRegistPass("Correct password");
      setIsOpenedError(false);
    } else {
      props.setErrorRegistPass(null);
    }
    props.setRegistPass(event.target.value);
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
          value={props.registPass}
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
          {props.errorRegistPass}
        </h5>
      ) : (
        <h5 className={styles.errorPassword} style={{ color: "green" }}>
          {props.correctRegistPass}
        </h5>
      )}
    </div>
  );
};

export default RegistPassword;
