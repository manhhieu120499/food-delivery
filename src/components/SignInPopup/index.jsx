import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignInPopup.module.scss";
import crossIcon from "../../assets/frontend/cross_icon.png";
import Input from "../Input";
import Button from "../Button";
import toast from "react-hot-toast";
import validator from "validator";
import axiosInstance from "../../lib/axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/slice";
import { useNavigate } from "react-router-dom";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

const SignInPopup = ({ setShowSignUp = () => {} }) => {
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [checkTerm, setCheckTerm] = useState(false);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignIn = async () => {
    const { username, email, password } = account;
    const stylesMessage = {
      style: {
        fontSize: '1.5rem'
      }
    }

    // validate
    if (!username || !email || !password) {
      toast.error("Please fill in all field", {
        ...stylesMessage
      });
      return;
    }
    if (username.length < 5) {
      toast.error("Min Length username is 5", {
        ...stylesMessage
      });
      return;
    }
    if (!validator.isEmail(email)) {
      toast.error("Email is not valid", {
        ...stylesMessage
      });
      return;
    }
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      })
    ) {
      toast.error("Password is not enough strong", {
        ...stylesMessage
      });
      return;
    }
    if (!checkTerm) {
      toast.error("Please accepted my term", {
        icon: <FontAwesomeIcon icon={faTriangleExclamation} color="#fe5000"/>,
        style: {
          fontSize: "1.7rem",
        },
      });
      return;
    }

    // xử lý logic ở đây
    try {
      const response = await axiosInstance.post("/auth/sign-up", {
        ...account,
        role: 'customer'
      });
      if (response.data.status == "OK") {
        toast.success(response.data.message, {
          ...stylesMessage
        });
        localStorage.setItem('user', JSON.stringify(response.data.account))
        dispatch(login(response.data.account))
        navigate("/")
        setShowSignUp(false)
      }
    } catch (err) {
      toast.success(err.response.data.message, {
        ...stylesMessage
      });
      return;
    }
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
          <input type="checkbox" value={checkTerm}
            onChange={() => setCheckTerm((prev) => !prev)}/>
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
