import Header from "../../component/header/header";
import HideButton from "../../component/hideButton/hidebutton";
import List from "../../component/list/list";
import ThreeItemsList from "../../component/threeItems/threeitems";
import UserProfile from "../../component/userprofile/userprofile";
import useFetch from "../../utils/useFetch";
import styles from "./mypage.module.css"

const MyPage = () => {

    const {data, error, loading} = useFetch(whatsinmycart/mycart)

    const profile = data.profile
    const reviewer = data.reviewer
    const introduction = data.introduction
    const posts = data.posts
    const recentBuy = data.recentBuy
    const recentCart = data.recentCart
    const follows = data.follows

    const handleClick = () => {
        console.log('클릭됨')
    }

  return (
    <>
      <Header></Header>
      <UserProfile isMe={true} profile={profile} introduction={introduction} reviewer={reviewer}></UserProfile>
      <div className={styles.bodyContainer}>
        <div className={styles.recentBuy}>
            <div className={styles.recentBuyTitle}>최근 구매 상품</div>
            <button className={styles.moreButton} onClick={handleClick}>더보기</button>
            <ThreeItemsList itemListJson={recentBuy}/>
        </div>
        <div className={styles.recentCart}>
            <div className={styles.recentCartTitle}>최근 담은 상품</div>
            <button className={styles.moreButton} onClick={handleClick}>더보기</button>
            <ThreeItemsList itemListJson={recentCart}/>
            <div className={styles.hideButtonContainer}>
                <HideButton></HideButton>
                <HideButton></HideButton>
                <HideButton></HideButton>
            </div>
        </div>
        <div className={styles.myPosts}>
            <List list={posts}></List>
        </div>
        <div className={styles.followsContainer}>
            {follows.map((follow,index)=><div className={styles.followContainer} key={index}>
                <div className={styles.avatar}>
                    <img src={follow.profile}/>
                </div>
                <div className={styles.followCartContainer}>
                    <ThreeItemsList itemListJson={follow.carts}/>
                </div>
            </div>)}
        </div>
      </div>
    </>
  );
};

export default MyPage;
