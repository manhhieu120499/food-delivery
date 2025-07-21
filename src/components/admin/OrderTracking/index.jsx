import React from 'react';
import classNames from 'classnames/bind';
import styles from "./OrderTracking.module.scss"
import parcelIcon from "../../../assets/frontend/parcel_icon.png"

const cx = classNames.bind(styles)

const OrderTracking = () => {
    return (
        <div className={cx("wrapper-order-item")}>
            <img className={cx('picture-order')} src={parcelIcon} alt='picture-order'/>
            <div className={cx('info-order-cus')}>
                <p className={cx('title-order')}>
                 Green Salad x 2, Peace * 3,  Green Salad x 2, Peace * 3
                </p>
                <div className={cx('info-cus')}>
                    <p className={cx('cus-name')}>Nguyen Van Nam</p>
                    <p className={cx('address-cus')}>GreatStack, Whitefield{'\n'}
Bangalore, Karnataka, 560066, 560066</p>
                    <p className={cx('phone-cus')}>973354238</p>
                </div>
            </div>
            
            <p className={cx('amount')}>Items: 2</p>
            <p className={cx('status-order')}>$65</p>
            <select className={cx('status-tracking')}>
                <option>Food processing</option>
                <option>Out of delivery</option>
                <option>Delivered</option>
            </select> 
        </div>
    );
}

export default OrderTracking;
