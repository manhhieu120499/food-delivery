import React from 'react';
import classNames from 'classnames/bind';
import styles from "./Dashboard.module.scss"
import OrderTracking from '../../../components/admin/OrderTracking';

const cx = classNames.bind(styles)

const Dashboard = () => {
    return (
        <div className={cx('wrapper-dashboard')}>
            <h1>Order Page</h1>
            <OrderTracking/>
             <OrderTracking/>
             <OrderTracking/>
        </div>
    );
}

export default Dashboard;
