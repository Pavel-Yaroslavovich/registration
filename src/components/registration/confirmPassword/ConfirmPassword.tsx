import { useState, useEffect } from "react";
import styles from "./confrimPassword.module.css";
import password from "../../../image/password.svg";
import eyeShow from "../../../image/eyeTrue.png";
import eyeClose from "../../../image/eyeFalse.png";

interface Iprops {
  registPass: string;
}

const ConfrimPassword = ({ registPass }: Iprops) => {
  const [isShow, setIsShow] = useState(false);
  const [confrimPass, setConfrimPass] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [correct, setCorrect] = useState<string | null>(null);
  const [isOpenedError, setIsOpenedError] = useState(false);

  const passShowTogleEye = () => {
    setIsShow(!isShow);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfrimPass(event.target.value);
  };

  useEffect(() => {
    if (registPass === confrimPass) {
      setError("password not confirmed");
      setIsOpenedError(false);
    } else {
      setCorrect("Correct password");
      setIsOpenedError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confrimPass]);

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
            onClick={passShowTogleEye}
          />
        ) : (
          <img
            className={styles.eye}
            src={eyeClose}
            alt="eye close"
            onClick={passShowTogleEye}
          />
        )}
      </div>
      <hr className={styles.line} />
      {isOpenedError ? (
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

export default ConfrimPassword;
