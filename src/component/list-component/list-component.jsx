import { useEffect } from "react";
import styles from "./list-component.module.css";

const ListComponent = () => {
  const text = "안녕"; //mock

  useEffect(() => {});
  return (
    <div className={styles.listComponentContainer}>
      <img className={styles.image} src="" />
      <div>{text}</div>
    </div>
  );
};

export default ListComponent;
