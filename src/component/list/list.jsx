import ListComponent from "../list-component/list-component";
import styles from "./list.module.css";

const List = (list) => {
  return (
    <div className={styles.listContainer}>
      {list.map((item,index)=><ListComponent key={index} item={item}></ListComponent> )}
    </div>
  );
};

export default List;
