import { useStyleContext } from "../context/StyleConext";
import styles from "./style.module.css";

export const PrimaryButton = ({ children, onClick }) => {
  const { fontSize, color } = useStyleContext();

  return (
    <button
      style={{ fontSize: fontSize, color: color }}
      onClick={onClick}
      className={styles.btn}
    >
      {children}
    </button>
  )
};
