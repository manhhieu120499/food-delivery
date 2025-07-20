import React from 'react';
import classNames from 'classnames/bind';
import styles from './FoodCategory.module.scss'

const cx = classNames.bind(styles)

const FoodCategory = ({name, imageSrc, onClick=() => {}, index}) => {
    return (
        <button className={cx('wrapper')} onClick={() => onClick(index)}>
            <img src={imageSrc} className={cx('avatar')} alt='avatar-food-category' loading='lazy'/>
            <p className={cx('title')}>{name}</p>
        </button>
    );
}

export default FoodCategory;
