import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles)

const Button = ({text, size, onClick = () => {}}) => {
    return (
        <div className={cx('wrapper', {
            [size]:true
        })} onClick={onClick}>
            <span className={cx('content')}>{text}</span>
        </div>
    );
}

export default Button;
