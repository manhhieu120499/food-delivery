import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FoodCard.module.scss";
import addFoodIcon from "../../assets/frontend/add_icon_white.png";
import rating from "../../assets/frontend/rating_starts.png";
import addIconGreen from "../../assets/frontend/add_icon_green.png";
import minusIconRed from "../../assets/frontend/remove_icon_red.png";

const cx = classNames.bind(styles);

const FoodCard = ({name, pic, price}) => {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(false);

  const addFood = () => {
    setAdd((prev) => !prev);
    increaseFoodOrder();
  };

  const increaseFoodOrder = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseOrderFood = () => {
    setCount((prev) => {
      if (prev - 1 == 0) setAdd(false);
      return prev - 1;
    });
  };

  return (
    <div className={cx("wrapper-food-card")}>
      <div className={cx("food-image")}>
        <img src={pic} alt="food-image" loading="lazy" />

        <div className={cx("add-food")}>
          {!add ? (
            <img src={addFoodIcon} alt="add-food" onClick={addFood} />
          ) : (
            <div className={cx("increase-decrease-food")}>
              <img src={minusIconRed} alt="minus" onClick={decreaseOrderFood} />
              {count > 0 && <span className={cx("amount-food")}>{count}</span>}
              <img src={addIconGreen} alt="plus" onClick={increaseFoodOrder} />
            </div>
          )}
        </div>
      </div>
      <div className={cx("food-content")}>
        <div className={cx("food-heading")}>
          <h2 className={cx("food-title")}>{name}</h2>
          <img src={rating} alt="rating-food" />
        </div>
        <p className={cx("food-des")}>
          Food provides essential nutrients for overall health and well-being
        </p>
        <p className={cx("food-price")}>${price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
