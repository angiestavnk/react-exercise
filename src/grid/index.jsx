import { useEffect, useState } from "react";
import { COLUMN, GRID } from "../utils/constants";
import styles from "./style.module.css";

export const GridPage = ({ variant }) => {
  const [displayState, setDisplay] = useState(variant);
  const [showButton, setShowButton] = useState(false);

  const changeView = () => {
    if (displayState === GRID) {
      setDisplay(COLUMN)
    } else {
      setDisplay(GRID)
    }
  };

  const displayStyle = {
    display: displayState === COLUMN ? "flex" : "grid"
  };

  const itemStyle = {
    item: {
      width: displayState === COLUMN && "250px",
      height: displayState === COLUMN && "250px"
    }
  };

  useEffect(() => {
    setShowButton(true);
  }, []);

  return (
    <div className={styles.container}>
      {showButton && <button className={styles.btn} onClick={changeView}>Change layout</button>}
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