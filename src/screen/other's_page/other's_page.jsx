import Banner from "../../component/banner/banner";
import Card from "../../component/card/card";
import Header from "../../component/header/header";
import List from "../../component/list/list";
import UserProfile from "../../component/userprofile/userprofile";
import useFetch from "../../utils/useFetch";
import styles from "./other's_page.module.css"

import { useSearchParams } from 'react-router-dom';

const OthersPage = ({
    
}) => {

  const [searchParams] = useSearchParams();
  const reviewerName = searchParams.get('query')

  const {data, error, loading } = useFetch(whatsinmycart/cart/{reviewerName}) 

  const introduction=data.introduction
  const profile=data.profile
  const reviewer = data.reviewer
  const banner =data.banner
  const posts = data.posts 
  const carts = data.carts 

  return (
    <>
      <Header></Header>
      <UserProfile isMe={false} introduction={introduction} profile={profile} reviewer={reviewer}></UserProfile>
      <div className={styles.bodyCotainer}>
        <Banner className={styles.banner} url={banner}></Banner>
        <List className={styles.list} list={posts}></List>
        <div className={styles.cartItemList}>
            {carts.map(item => <Card key={item.id} image={item.image} productUrl={productUrl}></Card>)}
        </div>
      </div>
    </>
  );
};

export default OthersPage