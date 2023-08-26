import styles from "./signInButton.module.css";

interface Iprops {
  dataChecking: () => void;
}

const SignInButton = ({ dataChecking }: Iprops) => {
  return (
    <button className={styles.btn} type="submit" onClick={dataChecking}>
      Login
    </button>
  );
};

export default SignInButton;
