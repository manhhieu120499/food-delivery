import React, { useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from "./Order.module.scss"
import Button from "../Button"
import selectorIcon from "../../assets/frontend/selector_icon.png"
import parcelIcon from "../../assets/frontend/parcel_icon.png"

const cx = classNames.bind(styles)

const Order = ({data}) => {
    const titleOrder = useMemo(() => {
        const arrName = []
        data.OrderDetails.map(item => arrName.push(`${item.foodName} x ${item.quantity}`))
        return arrName.join(',')
    }, [])
    return (
        <div className={cx("wrapper-order-item")}>
            <img className={cx('picture-order')} src={parcelIcon} alt='picture-order'/>
            <p className={cx('title-order')}>
               {titleOrder}
            </p>
            <p className={cx('amount')}>Items: {data.OrderDetails.length}</p>
            <p className={cx('status-order')}><img className={cx('status-icon')} src={selectorIcon} alt='status-icon'/>{data.statusOrder}</p>
            <Button text={"Track Order"} size={'track'}/> 
        </div>
    );
}

export default Order;
