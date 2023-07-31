import styles from "./registButton.module.css";
import { Link } from "react-router-dom";

const RegistButton = (props: any) => {
  console.log(props.registPass);

  const disabletBtnRegist = (): boolean => {
    let regPass: boolean;
    let correct: string = "Correct password";
    let error: string = "Enter one capital letter and one number";
    if (
      props.correctRegistPass !== correct &&
      props.setErrorRegistPass !== error
    ) {
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
        onChange={props.btnRegist}
        disabled={disabletBtnRegist()}
      >
        Register
      </button>
    </Link>
  );
};

export default RegistButton;
