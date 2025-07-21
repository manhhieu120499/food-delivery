import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./LoginPopup.module.scss";
import crossIcon from "../../assets/frontend/cross_icon.png";
import Input from "../Input";
import Button from "../Button";
import toast from "react-hot-toast";

const cx = classNames.bind(styles);

const LoginPopup = ({ setShowLogin = () => {} }) => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    // xử lý logic ở đây
    toast.success("Login success!", {
      style: {
        fontSize: "1.7rem",
      },
    });
  };
  return (
    <div className={cx("wrapper-login")}>
      <div className={cx("content")}>
        <div className={cx("header-popup")}>
          <h1>Login</h1>
          <img
            src={crossIcon}
            alt="btn-close"
            onClick={() => setShowLogin({ login: false, signUp: false })}
          />
        </div>
        <form className={cx("form")}>
          <Input
            value={account.email}
            placeholder={"Your email"}
            type={"text"}
            size={"medium"}
            onChange={(e) => {
              setAccount((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <Input
            value={account.password}
            placeholder={"Password"}
            type={"password"}
            size={"medium"}
            onChange={(e) => {
              setAccount((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
          <Button text={"Login"} size={"rectangle"} onClick={handleLogin} />
        </form>
        <div className={cx("des")}>
          <input type="checkbox" />
          <span>By continuing, i agree the terms of use & private policy</span>
        </div>
        <div className={cx("footer-content")}>
          <p>
            Create new a account ?{" "}
            <button
              onClick={() => setShowLogin({ login: false, signUp: true })}
            >
              Click here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
