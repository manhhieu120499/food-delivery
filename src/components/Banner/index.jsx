import React from "react";
import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

const Banner = ({ imageSrc }) => {
  return (
    <div
      className={cx("wrapper")}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <h1 className={cx("title")}>Order your favourite food here</h1>
      <h6 className={cx("des")}>
        Fast, Fresh, and Delicious – Delivered to Your Door. Discover a world of
        flavors with our food delivery app. From local favorites to
        international cuisines, we bring your cravings to life with just a few
        taps. Enjoy quick delivery, live order tracking, and exclusive deals
        every day. Satisfy your hunger anytime, anywhere.
      </h6>
      <Button text={"View Menu"} size={"medium"} />
    </div>
  );
};

export default Banner;
