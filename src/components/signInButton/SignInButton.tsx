import styles from "./signInButton.module.css";

const SignInButton = () => {
  return (
    <div className={styles.btn}>
      <button className={styles.btnText} type="submit">
        Login
      </button>
    </div>
  );
};

export default SignInButton;
