import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Navbar from '../../components/Navbar'
import LoginPopup from '../../components/LoginPopup';
import SignInPopup from '../../components/SignInPopup';


const cx = className.bind(styles)

const DefaultLayout = ({children}) => {
    const [show, setShow] = useState({
        login: false,
        signUp: false
    })
   
    return (
        <div className={cx('wrapper')}>
            <Navbar onClick={() => setShow({login: false, signUp: true})}/>
            {children}  
            {show.login && <LoginPopup setShowLogin={setShow} />}
            {show.signUp && <SignInPopup setShowSignUp={setShow} />}
        </div>
    );
}

export default DefaultLayout;
