import { useEffect } from "react";
import styles from "./list-component.module.css";

const ListComponent = (item) => {
  return (
    <div className={styles.listComponentContainer}>{item}
    </div>
  );
};

export default ListComponent;
