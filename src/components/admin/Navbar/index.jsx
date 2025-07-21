import React from 'react';
import classNames from 'classnames/bind';
import styles from "./Navbar.module.scss"
import logo from "../../../assets/frontend/logo.png"

const cx = classNames.bind(styles)

const Navbar = () => {
    return (
        <div className={cx('wrapper-navbar-admin')}>
            <div className={cx('navbar-content')}>
                <div className={cx('logo')}>
                <img src={logo} alt='logo'/>
                <p>Admin Jack</p>
            </div>
            <img src='https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' className={cx('avatar')}/>
            </div>  
        </div>
    );
}

export default Navbar;
