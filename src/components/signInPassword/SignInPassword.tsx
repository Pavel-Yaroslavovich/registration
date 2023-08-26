import styles from "./signInPassword.module.css";
import password from "../../image/password.svg";
import eyeShow from "../../image/eyeTrue.png";
import eyeClose from "../../image/eyeFalse.png";
import { useState } from "react";

interface Iprops {
  pass: string;
  setPass: (str: string) => void;
}

const SignInPassword = ({ pass, setPass }: Iprops) => {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [correct, setCorrect] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState(false);

  const passShowTogle = () => {
    setIsShow(!isShow);
  };

  const validPassword = (pass: string) => {
    return /[A-Z]/.test(pass) && /[0-9]/.test(pass);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!validPassword(event.target.value)) {
      setError("Enter one capital letter and one number");
      setIsOpened(true);
    } else if (validPassword(event.target.value)) {
      setCorrect("Correct password");
      setIsOpened(false);
    } else {
      setError(null);
    }
    setPass(event.target.value);
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
          value={pass}
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
      {isOpened ? (
        <h5 className={styles.errorPassword} style={{ color: "red" }}>
          {error}
        </h5>
      ) : (
        <h5 className={styles.errorPassword} style={{ color: "green" }}>
          {correct}
        </h5>
      )}
    </div>
  );
};

export default SignInPassword;
