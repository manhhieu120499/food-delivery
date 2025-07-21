import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import SidebarItem from './SidebarItem';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles)

const Sidebar = () => {
    const location = useLocation();
    const sideBarMenu = [{
        name: 'Add Items',
        icon: faCirclePlus, 
        path: ['/admin/add']
    }, 
{
    name: 'List Items',
    icon: faCheckToSlot,
    path: ['/admin/list']
}, {
    name: 'Orders',
    icon: faCheckToSlot,
    path: ['/admin/orders', '/admin/dashboard']
}]
    return (
        <div className={cx('wrapper-sidebar')}>
            {sideBarMenu.map(sideItem => <SidebarItem location={location} key={sideItem.name} icon={sideItem.icon} text={sideItem.name} path={sideItem.path}/>)}
        </div>
    );
}

export default Sidebar;
