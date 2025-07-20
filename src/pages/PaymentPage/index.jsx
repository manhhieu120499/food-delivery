import React from "react";
import classNames from "classnames/bind";
import styles from "./PaymentPage.module.scss";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";

const cx = classNames.bind(styles);

const PaymentPage = () => {
  return (
    <>
      <Navbar />
      <div className={cx("wrapper-payment")}>
        <div className={cx("delivery-info")}>
          <h1>Delivery Information</h1>
          <form className={cx("form")}>
            <div className={cx("form-control")}>
              <Input value={""} placeholder={"First name"} />
               <Input value={""} placeholder={"Last name"} />
            </div>
            <div className={cx('form-control')}>
                 <Input value={""} placeholder={"Email address"} size={'medium'}/>
            </div>
            <div className={cx('form-control')}>
                 <Input value={""} placeholder={"Street"} size={'medium'}/>
            </div>
            <div className={cx('form-control')}>
                  <Input value={""} placeholder={"City"} />
               <Input value={""} placeholder={"State"} />
            </div>
             <div className={cx('form-control')}>
                  <Input value={""} placeholder={"Zip"} />
               <Input value={""} placeholder={"Country"} />
            </div>
             <div className={cx('form-control')}>
                 <Input value={""} placeholder={"Phone"} size={'medium'}/>
            </div>
          </form>
        </div>

        <div className={cx("info-payment")}>
          <h1>Cart Totals</h1>
          <div className={cx("info-item")}>
            <span className={cx("title-info-item")}>Subtotal</span>
            <span className={cx("price-info-item")}>$60</span>
          </div>
          <div className={cx("info-item")}>
            <span className={cx("title-info-item")}>Delivery Fee</span>
            <span className={cx("price-info-item")}>$60</span>
          </div>
          <div className={cx("info-item")}>
            <span className={cx("title-info-item")}>Total</span>
            <span className={cx("price-info-item")}>$60</span>
          </div>
          <button className={cx("btn-pay")}>Proceed To Payment</button>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
