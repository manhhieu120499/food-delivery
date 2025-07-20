import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles)

const Input = ({value, onChange = () => {}, size, placeholder}) => {
    return (
        <input className={cx("wrapper", {
            [size]: true
        })} value={value} onChange={onChange} placeholder={placeholder}/>
    );
}

export default Input;
