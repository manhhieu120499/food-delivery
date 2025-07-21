import React from 'react';
import classNames from 'classnames/bind';
import styles from "./AdminLayout.module.scss"
import Navbar from '../../../components/admin/Navbar';
import Sidebar from '../../../components/admin/Sidebar';

const cx = classNames.bind(styles)

const AdminLayout = ({children}) => {
    return (
        <div className={cx('wrapper-admin')}>
            <Navbar/>
            <div className={cx('container')}>
                <Sidebar/>
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;
