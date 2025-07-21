import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles)

const Input = ({value, onChange = () => {}, size, placeholder, type}) => {
    return (
        <input className={cx("wrapper", {
            [size]: true
        })} value={value} onChange={onChange} placeholder={placeholder} type={type}/>
    );
}

export default Input;
