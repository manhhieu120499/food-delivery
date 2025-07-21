import React from 'react';
import classNames from 'classnames/bind';
import styles from "./PlaceOrder.module.scss"
import Order from '../../components/Order';

const cx = classNames.bind(styles)

const PlaceOrder = () => {
    return (
        <div className={cx('wrapper-order')}>
            <h1>My Orders</h1>
            <Order/>
        </div>
    );
}

export default PlaceOrder;
