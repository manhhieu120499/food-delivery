import React from 'react';
import classNames from 'classnames/bind';
import styles from "./Navbar.module.scss"
import logo from "../../../assets/frontend/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '../../../lib/axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/slice';

const cx = classNames.bind(styles)

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = async () => {
        const stylesMessage = {
            style: {
                fontSize: "1.5rem"
            }
        }
        try{
            const res = await axiosInstance.post('/auth/logout')
            toast.success(res.data.message, {
                ...stylesMessage
            })
            navigate("/")
            localStorage.setItem('user', null)
            dispatch(logout())
        }catch(err) {
            return toast.error(err.response.data.message, {
                ...stylesMessage
            })
        }
    }


    return (
        <div className={cx('wrapper-navbar-admin')}>
            <div className={cx('navbar-content')}>
                <div className={cx('logo')}>
                <img src={logo} alt='logo'/>
                <p>Admin Jack</p>
            </div>
            <div className={cx('right-navbar')}>
                 <img src='https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' className={cx('avatar')}/>
                 <button className={cx('btn-logout')} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className={cx('icon')} />
                    <span>Logout</span>
                 </button>
                
            </div>
            </div>  
        </div>
    );
}

export default Navbar;
