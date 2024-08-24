import styles from "./home.module.css";
import Header from "../../component/header/header";
import List from "../../component/list/list";
import Banner from "../../component/banner/banner";
import Card from "../../component/card/card";
import useFetch from "../../utils/useFetch";

const Home = () => {

    const {data, error, loading} = useFetch("whatsinmycart/landing")

  return (
    <div>
      <Header></Header>
      <div className={styles.optionsContainer}>
        
      </div>
      <div className={styles.bodyContainer}>
        <List className={styles.reviewList} list = {data.reviewers}></List>
        <Banner className={styles.banner} url={data.AdBanner}></Banner>
        <div className={styles.recommendItem}>
            {data.recommendItem.map((item,index)=><Card key={index} image={item.image} productUrl={item.productUrl}></Card>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
