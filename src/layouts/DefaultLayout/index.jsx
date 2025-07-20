import React from 'react';
import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';


const cx = className.bind(styles)

const DefaultLayout = ({children}) => {
    return (
        <div className={cx('wrapper')}>
            {children}    
        </div>
    );
}

export default DefaultLayout;
