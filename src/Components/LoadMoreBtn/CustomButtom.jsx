import styles from "./CustomButtom.module.css";

const CustomButton = ({ onClick, typeBtn, children }) => {
  return (
    <button className={styles.btn} onClick={onClick} type={typeBtn}>
      {children}
    </button>
  );
};

export default CustomButton;
