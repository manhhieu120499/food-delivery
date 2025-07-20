import React from "react";
import classNames from "classnames/bind";
import styles from "./CartPage.module.scss";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const CartPage = () => {
  return (
    <>
      <Navbar />
      <div className={cx("wrapper-cart")}>
        {/** table order food */}
        <table className={cx('table-order')}>
          <thead className={cx('table-head')}>
            <tr>
                <th>Item</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
            </tr>
            
          </thead>
          <tbody className={cx('table-body')}>
            <tr className={cx('row')}>
              <td>
                <img src={"https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482784hOI/anh-mo-ta.png"} className={cx('image-order')} alt="image-order" />
              </td>
              <td>Greak Salad</td>
              <td>$12</td>
              <td><span className={cx('quantity')}>1</span></td>
              <td>$12</td>
              <td><button className={cx('btn-remove')}>&times;</button></td>
            </tr>
          </tbody>
        </table>

        {/** payment */}
        <div className={cx('payment-total')}>
            <div className={cx('info-payment')}>
              <h1>Cart Totals</h1>
              <div className={cx('info-item')}>
                <span className={cx('title-info-item')}>Subtotal</span>
                <span className={cx('price-info-item')}>$60</span>
              </div>
              <div className={cx('info-item')}>
                <span className={cx('title-info-item')}>Delivery Fee</span>
                <span className={cx('price-info-item')}>$60</span>
              </div>
              <div className={cx('info-item')}>
                <span className={cx('title-info-item')}>Total</span>
                <span className={cx('price-info-item')}>$60</span>
              </div>
              <Link to={'/payment'}>
                <button className={cx('btn-pay')}>PROCESS TO CHECKOUT</button>
              </Link>
            </div>
            <div className={cx('discount')}>
              <p className={cx('discount-des')}>If you have promo code, Enter it here</p>
              <div className={cx('promo-discount')}>
                <input className={cx('promo-code')} placeholder="promo code"/>
                <button className={cx('btn-submit-code')}>Submit</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
