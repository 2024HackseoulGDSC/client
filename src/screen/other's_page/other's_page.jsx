import Banner from "../../component/banner/banner";
import Header from "../../component/header/header";
import List from "../../component/list/list";
import UserProfile from "../../component/userprofile/userprofile";
import styles from "./other's_page.module.css"

import { useSearchParams } from 'react-router-dom';

const OthersPage = ({
    
}) => {

  const [searchParams] = useSearchParams();
  const userName = searchParams.get('query')

  const introduction="자기소개"
  const profile='https://via.placeholder.com/150'

  const cartList = [
    {id:1, url: 'https://via.placeholder.com/150'},
    {id:2, url: 'https://via.placeholder.com/150'},
    {id:3, url: 'https://via.placeholder.com/150'},
    {id:4, url: 'https://via.placeholder.com/150'},
    {id:5, url: 'https://via.placeholder.com/150'}
  ]

  return (
    <>
      <Header></Header>
      <UserProfile isMe={false} introduction={introduction} profile={profile}></UserProfile>
      <div className={styles.bodyCotainer}>
        <Banner className={styles.banner}></Banner>
        <List className={styles.list}></List>
        <div className={styles.cartItemList}>
            {cartList.map(item => <img key={item.id} src={item.url}></img>)}
        </div>
      </div>
    </>
  );
};

export default OthersPage