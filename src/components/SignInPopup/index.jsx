import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignInPopup.module.scss";
import crossIcon from "../../assets/frontend/cross_icon.png";
import Input from "../Input";
import Button from "../Button";
import toast from "react-hot-toast";

const cx = classNames.bind(styles);

const SignInPopup = ({ setShowSignUp = () => {} }) => {
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignIn = () => {
    // xử lý logic ở đây
    toast.success("Login success!", {
      style: {
        fontSize: "1.7rem",
      },
    });
  };
  return (
    <div className={cx("wrapper-signin")}>
      <div className={cx("content")}>
        <div className={cx("header-popup")}>
          <h1>Sign Up</h1>
          <img
            src={crossIcon}
            alt="btn-close"
            onClick={() => setShowSignUp({ login: false, signUp: false })}
          />
        </div>
        <form className={cx("form")}>
          <Input
            value={account.username}
            placeholder={"Username"}
            type={"text"}
            size={"medium"}
            onChange={(e) => {
              setAccount((prev) => ({ ...prev, username: e.target.value }));
            }}
          />
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
          <Button
            text={"Create Account"}
            size={"rectangle"}
            onClick={handleSignIn}
          />
        </form>
        <div className={cx("des")}>
          <input type="checkbox" />
          <span>By continuing, i agree the terms of use & private policy</span>
        </div>
        <div className={cx("footer-content")}>
          <p>
            Already have a account ?{" "}
            <button
              onClick={() => {
                setShowSignUp({ login: true, signUp: false });
              }}
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPopup;
