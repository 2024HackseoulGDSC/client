import React, { useEffect, useState } from "react";
import styles from "./userprofile.module.css";

const UserProfile = ({
    isMe,
    introduction,
    profile,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState("");

  const handleClick = () => {
    setIsClicked(prevState=>!prevState)
  }

  useEffect(() => {
    if (isMe) {
      setText("수정");
    } else {
      if (isClicked) {
        setText("언팔로우");
      } else {
        setText("팔로우");
      }
    }
  }, [isMe, isClicked]);

  return (
    <div className={styles.profile}>
      <div className={styles.avatarContainer}>
        <img src={profile}></img>
      </div>
      <div className={styles.info}>{introduction}</div>
      <button className={styles.button} onClick={handleClick}>{text}</button>
    </div>
  );
};

export default UserProfile;
