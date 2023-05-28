import { useState } from "react";
import styles from "./confrimPassword.module.css";
import password from "../../../image/password.svg";
import eyeShow from "../../../image/eyeTrue.png";
import eyeClose from "../../../image/eyeFalse.png";
import SignInButton from "../../signInButton/SignInButton";

const ConfrimPassword = () => {
  const [confrimPass, setConfrimPass] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);
  const [correct, setCorrect] = useState<any | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  console.log(confrimPass);

  const passShowTogle = () => {
    setIsShow(!isShow);
  };

  const validPassword = (confrimPass: string) => {
    return /[A-Z]/.test(confrimPass) && /[0-9]/.test(confrimPass);
  };

  const handleChange = (event: any) => {
    if (!validPassword(event.target.value)) {
      setError("Enter one capital letter and one number");
      setIsOpened(true);
    } else if (validPassword(event.target.value)) {
      setCorrect("Correct password");
      setIsOpened(false);
    } else {
      setError(null);
    }
    setConfrimPass(event.target.value);
  };

  return (
    <div>
      <label className={styles.inputInfo} htmlFor="confrimPassword">
        Confrim Password
      </label>
      <div className={styles.passBlock}>
        <label htmlFor="confrimPassword">
          <img src={password} alt="password" />
        </label>
        <input
          className={styles.inputPassword}
          type={isShow ? "text" : "password"}
          name="confrimPassword"
          id="confrimPassword"
          maxLength={36}
          value={confrimPass}
          onChange={handleChange}
          placeholder="Confrim your password"
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
      {isOpened ? (
        <h5 className={styles.errorPassword} style={{ color: "red" }}>
          {error}
        </h5>
      ) : (
        <h5 className={styles.errorPassword} style={{ color: "green" }}>
          {correct}
        </h5>
      )}
      <SignInButton />
    </div>
  );
};

export default ConfrimPassword;
