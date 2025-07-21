import React from 'react';
import classNames from 'classnames/bind';
import styles from "./Order.module.scss"
import Button from "../Button"
import selectorIcon from "../../assets/frontend/selector_icon.png"
import parcelIcon from "../../assets/frontend/parcel_icon.png"

const cx = classNames.bind(styles)

const Order = () => {
    return (
        <div className={cx("wrapper-order-item")}>
            <img className={cx('picture-order')} src={parcelIcon} alt='picture-order'/>
            <p className={cx('title-order')}>
                Green Salad x 2, Peace * 3,  Green Salad x 2, Peace * 3
            </p>
            <p className={cx('amount')}>Items: 2</p>
            <p className={cx('status-order')}><img className={cx('status-icon')} src={selectorIcon} alt='status-icon'/>Food processing</p>
            <Button text={"Track Order"} size={'track'}/> 
        </div>
    );
}

export default Order;
