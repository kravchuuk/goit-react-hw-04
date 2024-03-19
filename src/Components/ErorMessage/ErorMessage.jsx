import { errorMessage } from "../../notification/messages";
import styles from "./ErorMessage.module.css";

const ErrorMessage = ({ isError }) => {
  return isError && <p className={styles.empty}>{errorMessage.emptyLoad}</p>;
};

export default ErrorMessage;
