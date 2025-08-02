import React from 'react';
import classNames from 'classnames/bind';
import styles from "./SidebarItem.module.scss"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

const SidebarItem = ({location, icon, text ="Add Items", path = []}) => {
    return (
        <Link to={`${path[0]}`} className={cx("wrapper-sidebar-item", {
            active: path.includes(location.pathname)
        })}>
            {icon && 
                <FontAwesomeIcon className={cx('icon')} icon={icon}/>
            }
            <p className={cx('title')}>{text}</p>
        </Link>
    );
}

export default SidebarItem;
