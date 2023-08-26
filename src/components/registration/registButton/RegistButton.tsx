import styles from "./registButton.module.css";
import { Link } from "react-router-dom";

interface Iprops {
  btnRegist: (target: any) => void;
  correctRegistPass: string | null;
  errorRegistPass: string | null;
}

const RegistButton = ({ btnRegist, correctRegistPass }: Iprops) => {
  const disabletBtnRegist = () => {
    let regPass: boolean;
    let correct: string = "Correct password";
    if (correctRegistPass !== correct) {
      regPass = true;
    } else {
      regPass = false;
    }
    return regPass;
  };

  return (
    <Link to="/">
      <button
        className={styles.btn}
        type="submit"
        onChange={btnRegist}
        disabled={disabletBtnRegist()}
      >
        Register
      </button>
    </Link>
  );
};

export default RegistButton;
