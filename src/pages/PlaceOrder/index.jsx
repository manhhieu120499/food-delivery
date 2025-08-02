import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from "./PlaceOrder.module.scss"
import Order from '../../components/Order';
import axiosInstance, { refreshToken } from '../../lib/axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateToken } from '../../redux/auth/slice';

const cx = classNames.bind(styles)

const PlaceOrder = () => {
    const auth = useSelector(state => state.AuthSlice.user)
    const [myOrder, setMyOrder] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchOrder = async () => {
            try{
                const response = await axiosInstance.post('/order/my-order', {
                    email: auth.email
                })
                setMyOrder(response.data.data)
            }catch(err) {
                if(err.response.data.message == "Unauthorized: jwt expired") {
                    refreshToken(auth.email, (accessToken, refreshToken) => {
                        return dispatch(updateToken({accessToken, refreshToken}))
                    })
                }
            }
        }
        fetchOrder()
    }, [auth.email, dispatch])
    return (
        <div className={cx('wrapper-order')}>
            <h1>My Orders</h1>
            {myOrder.length > 0 ? myOrder.map((ord, index) => <Order key={index} data={ord}/>) : <div>Not found my orders</div>}
        </div>
    );
}

export default PlaceOrder;
