import Header from "../../component/header/header";
import HideButton from "../../component/hideButton/hidebutton";
import ThreeItemsList from "../../component/threeItems/threeitems";
import UserProfile from "../../component/userprofile/userprofile";
import styles from "./mypage.module.css"

const MyPage = () => {

    const reviewers= 
    const recentBuy=
    const recentCart=
    const follows=

  return (
    <>
      <Header></Header>
      <UserProfile isMe={true}></UserProfile>
      <div className={styles.bodyContainer}>
        <List className={styles.textlist}></List>
        <div className={styles.recentBuy}>
            <div className={styles.recentBuyTitle}>최근 구매 상품</div>
            <button className={styles.moreButton} onClick={handleClick}>더보기</button>
            <ThreeItemsList itemListJson={recentBuy}/>
        </div>
        <div className={recentCart}>
            <div className={styles.recentCartTitle}>최근 담은 상품</div>
            <button className={styles.moreButton} onClick={handleClick}>더보기</button>
            <ThreeItemsList itemListJson={recentCart}/>
            <div className={hideButtonContainer}>
                <HideButton></HideButton>
                <HideButton></HideButton>
                <HideButton></HideButton>
            </div>
        </div>
        <div className={styles.followsContainer}>
            {follows.map(follow=><div className={styles.followContainer}>
                <div className={styles.avatar}>
                    <img src={follow.profile}/>
                </div>
                <div className={styles.followCartContainer}>
                    <ThreeItemsList itemListJson={follow.cart}/>
                </div>
            </div>)}
        </div>
      </div>
    </>
  );
};

export default MyPage;
