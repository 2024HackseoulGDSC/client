import ListComponent from "../list-component/list-component";
import styles from "./list.module.css";

const List = () => {
  return (
    <div className={styles.listContainer}>
      <ListComponent></ListComponent>
      <ListComponent></ListComponent>
      <ListComponent></ListComponent>
    </div>
  );
};

export default List;
