import { COLUMN, GRID } from "../utils/constants";
import styles from "./style.module.css";

export const GridPage = ({ variant }) => {
  const displayStyle = {
    display: variant === COLUMN ? "flex" : "grid"
  };

  const itemStyle = {
    item: {
      height: variant === COLUMN && "250px"
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer} style={displayStyle}>
        <div className={`${styles.item1} ${styles.item}`} style={itemStyle.item} />
        <div className={`${styles.item2} ${styles.item}`} style={itemStyle.item} />
        <div className={`${styles.item3} ${styles.item}`} style={itemStyle.item} />
        <div className={`${styles.item4} ${styles.item}`} style={itemStyle.item} />
        <div className={`${styles.item5} ${styles.item}`} style={itemStyle.item} />
        <div className={`${styles.item6} ${styles.item}`} style={itemStyle.item} />
      </div>
    </div>
  )
};

GridPage.defaultProps = {
  variant: GRID
}