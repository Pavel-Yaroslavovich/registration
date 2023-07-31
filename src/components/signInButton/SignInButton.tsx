import styles from "./signInButton.module.css";

const SignInButton = ({ dataСhecking }: any) => {
  return (
    // <div className={styles.btn}>
    <button className={styles.btn} type="submit" onClick={dataСhecking}>
      Login
    </button>
    // </div>
  );
};

export default SignInButton;
