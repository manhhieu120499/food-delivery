import React, { useMemo, useState } from "react";
import classNames from "classnames/bind";
import styles from "./PaymentPage.module.scss";

import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initShoppingCart } from "../../redux/shoppingCart/slice";
import toast from "react-hot-toast";
import validator from "validator";
import axiosInstance, { refreshToken } from "../../lib/axios";
import { updateToken } from "../../redux/auth/slice";

const cx = classNames.bind(styles);
const stylesMessage = {
  style: {
    fontSize: "1.5rem",
  },
};

const PaymentPage = () => {
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.ShoppingCartSlice);
  const auth = useSelector((state) => state.AuthSlice.user);
  const dispatch = useDispatch();
  const subTotal = useMemo(() => {
    return carts.reduce(
      (total, cur) =>
        total + Number.parseInt(cur.quantity) * Number.parseFloat(cur.price),
      0
    );
  }, [carts]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const validateData = (formData) => {
    const { fullName, email, street, city, state, zip, phone } = formData;
    if (!fullName || !email || !street || !city || !state || !zip || !phone) {
      toast.error("Please fill in all field", stylesMessage);
      return false;
    }
    if (!/^[a-zA-Z ]+$/.test(fullName)) {
      toast.error("Fullname only alphabet character", stylesMessage);
      return false;
    }
    if (!validator.isEmail(email)) {
      toast.error("Email is not valid", stylesMessage);
      return false;
    }
    if (!/^[a-zA-Z ]+$/.test(city)) {
      toast.error("City only alphabet character", stylesMessage);
      return false;
    }
    if (!/^[a-zA-Z ]+$/.test(state)) {
      toast.error("State only alphabet character", stylesMessage);
      return false;
    }
    if (!validator.isNumeric(zip)) {
      toast.error("Zip only number character", stylesMessage);
      return false;
    }
    if (!/^(03|05|07|08|09)\d{8}$/.test(phone)) {
      toast.error(
        "Phone have max length 10 number character and start with (03||05||08||09)",
        stylesMessage
      );
      return false;
    }
    return true;
  };
  const handlePayment = async () => {
    if (Object.keys(auth).length == 0) {
      toast.error("Please login before payment", stylesMessage);
      navigate("/");
      return;
    }
    const isValid = validateData(formData);
    if (!isValid) return;
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axiosInstance.post("/order/create", {
        statusOrder: "process",
        addressDelivery: `${formData.street},${formData.state},${formData.city},${formData.zip}`,
        phone: formData.phone,
        total: subTotal + 5,
        cusId: auth.cusId,
        email: formData.email,
        listFood: carts.map((item) => ({
          foodId: item.id,
          quantity: item.quantity,
          total: Number.parseInt(item.quantity) * Number.parseFloat(item.price),
        })),
      });
      dispatch(initShoppingCart({ carts: [] }));
      toast.success(response.data.message, stylesMessage);
      navigate("/myorders");
    } catch (err) {
      if (err.response.data.message == "Unauthorized: JWTToken is expired")
        refreshToken(auth.email, (accessToken, refreshToken) => {
          return dispatch(updateToken({ accessToken, refreshToken }));
        });
      toast.error(err.response.data.message, stylesMessage);
      return;
    }
  };

  const handleOnChangeInput = (inputName, value) => {
    switch (inputName) {
      case "email": {
        setFormData((prev) => ({ ...prev, email: value }));
        break;
      }
      case "fullName": {
        setFormData((prev) => ({ ...prev, fullName: value }));
        break;
      }
      case "street": {
        setFormData((prev) => ({ ...prev, street: value }));
        break;
      }
      case "city": {
        setFormData((prev) => ({ ...prev, city: value }));
        break;
      }
      case "zip": {
        setFormData((prev) => ({ ...prev, zip: value }));
        break;
      }
      case "phone": {
        setFormData((prev) => ({ ...prev, phone: value }));
        break;
      }
      case "state": {
        setFormData((prev) => ({ ...prev, state: value }));
        break;
      }
    }
  };
  return (
    <>
      <div className={cx("wrapper-payment")}>
        <div className={cx("delivery-info")}>
          <h1>Delivery Information</h1>
          <form className={cx("form")}>
            <div className={cx("form-control")}>
              <Input
                value={formData.fullName}
                placeholder={"Fullname"}
                size={"medium"}
                onChange={(e) =>
                  handleOnChangeInput("fullName", e.target.value)
                }
              />
            </div>
            <div className={cx("form-control")}>
              <Input
                value={formData.email}
                placeholder={"Email address"}
                size={"medium"}
                onChange={(e) => handleOnChangeInput("email", e.target.value)}
              />
            </div>
            <div className={cx("form-control")}>
              <Input
                value={formData.street}
                placeholder={"Street"}
                size={"medium"}
                onChange={(e) => handleOnChangeInput("street", e.target.value)}
              />
            </div>
            <div className={cx("form-control")}>
              <Input
                value={formData.city}
                placeholder={"City"}
                onChange={(e) => handleOnChangeInput("city", e.target.value)}
              />
              <Input
                value={formData.state}
                placeholder={"State"}
                onChange={(e) => handleOnChangeInput("state", e.target.value)}
              />
            </div>
            <div className={cx("form-control")}>
              <Input
                value={formData.zip}
                placeholder={"Zip"}
                size={"medium"}
                onChange={(e) => handleOnChangeInput("zip", e.target.value)}
              />
            </div>
            <div className={cx("form-control")}>
              <Input
                value={formData.phone}
                placeholder={"Phone"}
                size={"medium"}
                onChange={(e) => handleOnChangeInput("phone", e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className={cx("info-payment")}>
          <h1>Cart Totals</h1>
          <div className={cx("info-item")}>
            <span className={cx("title-info-item")}>Subtotal</span>
            <span className={cx("price-info-item")}>${subTotal}</span>
          </div>
          <div className={cx("info-item")}>
            <span className={cx("title-info-item")}>Delivery Fee</span>
            <span className={cx("price-info-item")}>$5</span>
          </div>
          <div className={cx("info-item")}>
            <span className={cx("title-info-item")}>Total</span>
            <span className={cx("price-info-item")}>
              ${`${subTotal}` > 0 ? subTotal + Number(5) : 0}
            </span>
          </div>
          <button className={cx("btn-pay")} onClick={handlePayment}>
            Proceed To Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
