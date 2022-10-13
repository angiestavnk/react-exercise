import styles from "./style.module.css";

export const GridPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={`${styles.item1} ${styles.item}`} />
        <div className={`${styles.item2} ${styles.item}`} />
        <div className={`${styles.item3} ${styles.item}`} />
        <div className={`${styles.item4} ${styles.item}`} />
        <div className={`${styles.item5} ${styles.item}`} />
        <div className={`${styles.item6} ${styles.item}`} />
      </div>
    </div>
  )
};
