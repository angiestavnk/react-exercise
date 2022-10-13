import { useStyleContext } from "../context/StyleConext";
import styles from "./style.module.css";

export const PrimaryButton = ({ children, onClick }) => {
  const { fontSize, setFontSize, color, setColor } = useStyleContext();

  setFontSize('18px');
  setColor('white');

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
