import React from 'react';
import classNames from 'classnames/bind';
import styles from './FoodCategory.module.scss'

const cx = classNames.bind(styles)

const FoodCategory = ({id,name, imageSrc, onClick=() => {}}) => {
    return (
        <button className={cx('wrapper')} onClick={() => onClick(id)}>
            <img src={imageSrc} className={cx('avatar')} alt='avatar-food-category' loading='lazy'/>
            <p className={cx('title')}>{name}</p>
        </button>
    );
}

export default FoodCategory;
