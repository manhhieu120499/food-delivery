import React from 'react';
import classNames from "classnames/bind"
import styles from "./AppDownload.module.scss"
import playStore from "../../assets/frontend/play_store.png"
import appStore from '../../assets/frontend/app_store.png'

const cx = classNames.bind(styles)

const AppDownload = () => {
    return (
        <div className={cx('wrapper')}>
            <h1>Get App Here To Choose Your Favourite Food</h1>
            <div className={cx('app-download')}>
                <img src={playStore} alt='ch-play'/>
                <img src={appStore} alt='app-store'/>
            </div>
        </div>
    );
}

export default AppDownload;
