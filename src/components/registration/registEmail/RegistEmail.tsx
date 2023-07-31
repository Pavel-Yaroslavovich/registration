import { useState } from "react";
import styles from "./registEmail.module.css";
import mail from "../../../image/mail.svg";

const RegistEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);
  const [correct, setCorrect] = useState<any | null>(null);
  localStorage.setItem("email", email);

  function isValidEmail(email: string) {
    return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
      email
    );
  }

  const handleChange = (event: any) => {
    if (!isValidEmail(event.target.value)) {
      setError("Incorrect email");
      setIsOpened(true);
    } else if (isValidEmail(event.target.value)) {
      setCorrect("Correct email");
      setIsOpened(false);
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  return (
    <div className={styles.inputBox}>
      <label className={styles.inputInfo} htmlFor="email">
        Email
      </label>
      <label htmlFor="email">
        <img className={styles.emailImg} src={mail} alt="email" />
      </label>
      <input
        className={styles.inputEmail}
        type="text"
        name="email"
        id="email"
        maxLength={40}
        placeholder="Enter your email address"
        value={email}
        onChange={handleChange}
      />
      <hr className={styles.line} />
      {isOpened ? (
        <h5 className={styles.errorEmail} style={{ color: "red" }}>
          {error}
        </h5>
      ) : (
        <h5 className={styles.errorEmail} style={{ color: "green" }}>
          {correct}
        </h5>
      )}
    </div>
  );
};

export default RegistEmail;
