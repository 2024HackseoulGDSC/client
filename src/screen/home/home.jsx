import styles from "./home.module.css";
import Header from "../../component/header/header";
import List from "../../component/list/list";
import Banner from "../../component/banner/banner";
import Card from "../../component/card/card";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.bodyContainer}>
        <List className={styles.reviewList}></List>
        <Banner className={styles.banner}></Banner>
        <Card className={styles.recommendItem}></Card>
      </div>
    </div>
  );
};

export default Home;
