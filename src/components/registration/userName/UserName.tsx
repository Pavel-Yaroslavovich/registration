import { useState } from "react";
import styles from "./userName.module.css";
import userName from "../../../image/username.svg";

const UserName = () => {
  const [username, setUsername] = useState<string>("");
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);
  const [correct, setCorrect] = useState<any | null>(null);

  function validUsername(username: string) {
    return /^[a-z0-9_.]+$/.test(username);
  }

  const handleChange = (event: any) => {
    if (!validUsername(event.target.value)) {
      setError("Incorrect username");
      setIsOpened(true);
    } else if (validUsername(event.target.value)) {
      setCorrect("Correct username");
      setIsOpened(false);
    } else {
      setError(null);
    }
    setUsername(event.target.value);
  };

  return (
    <div>
      <label className={styles.inputInfo} htmlFor="Username">
        Username
      </label>
      <label htmlFor="Username">
        <img className={styles.usernameImg} src={userName} alt="Username" />
      </label>
      <input
        className={styles.inputUsername}
        type="text"
        name="Username"
        id="Username"
        maxLength={40}
        placeholder="Enter your User name"
        value={username}
        onChange={handleChange}
      />
      <hr className={styles.line} />
      {isOpened ? (
        <h5 className={styles.errorUsername} style={{ color: "red" }}>
          {error}
        </h5>
      ) : (
        <h5 className={styles.errorUsername} style={{ color: "green" }}>
          {correct}
        </h5>
      )}
    </div>
  );
};

export default UserName;
