import React from "react";
import styles from "./banner.module.css";

const Banner = (url) => {
  return <div className={styles.bannerContainer}>
    <img src={url}></img>
  </div>;
};

export default Banner;
