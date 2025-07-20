import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss'
import logo from '../../assets/frontend/logo.png'

const cx = classNames.bind(styles)

const Footer = () => {
    return (
        <div className={cx('wrapper-footer')}>
            <img src={logo} alt='logo-footer'/>
            <div className={cx('info-contact')}>
                <h1>Contact Us</h1>
                <p>Email: tomato123@gmail.com</p>
                <p>Phone: +84 943 221 362</p>
            </div>
        </div>
    );
}

export default Footer;
