import React, { useEffect, useState } from 'react'
import styles from './UserProfile.module.css'

const UserProfile = (isMe) => {
    const [isClicked, Click] = useState(false);
    const [text, setText] = useState('')
    
    useEffect(()=>{
        if (isMe){
            setText("수정")
        } else {
            if (isClicked){
                setText("언팔로우")
            } else {
                setText("팔로우")
            }
        }
    }, [isMe,isClicked])

    return(
        <div className={styles.profile}>
            <div className={styles.avatarContainer}>
                <img src=''></img>
            </div>
            <div className={styles.info}>자기소개</div>
            <div className={styles.button}>{text}</div>
        </div>
    )
}

export default UserProfile;