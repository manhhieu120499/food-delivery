import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss'

const cx = classNames.bind(styles)

const ProductItem = ({item, onClick}) => {
    return (
        <tr className={cx('row-product')}>
            <td className={cx('product-image')}>
                <img src={item.pic} alt='image-product'/>
            </td>
            <td className={cx('product-name')}>{item.name}</td>
            <td className={cx('category-product')}>{item.category}</td>
            <td className={cx('product-price')}>${item.price}</td>
            <td onClick={onClick}>&times;</td>
        </tr>
    );
}

export default ProductItem;
