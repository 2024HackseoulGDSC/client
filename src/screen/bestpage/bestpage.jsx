import Banner from "../../component/banner/banner";
import Header from "../../component/header/header";
import List from "../../component/list/list";
import UserProfile from "../../component/userprofile/userprofile";
import styles from "./bestpage.module.css"

import { useSearchParams } from 'react-router-dom';

const VideoPlayer = () => {
    return (
      <div className={styles.videoContainer}>
        <video
          width="600"
          height="400"
          controls
          src="https://www.example.com/path/to/video.mp4"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

const BestPage = ({
    
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
        <div className={styles.video}>
            <VideoPlayer></VideoPlayer>
        </div>
        <div className={styles.cartItemList}>
            {cartList.map(item => <img key={item.id} src={item.url}></img>)}
        </div>
      </div>
    </>
  );
};

export default BestPage