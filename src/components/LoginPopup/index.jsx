import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./LoginPopup.module.scss";
import crossIcon from "../../assets/frontend/cross_icon.png";
import Input from "../Input";
import Button from "../Button";
import toast from "react-hot-toast";
import axiosInstance from "../../lib/axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/slice";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const LoginPopup = ({ setShowLogin = () => {} }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const validateForm = (email, password) => {
    if (!email || !password) {
      toast.error("Please fill in all field", {
        style: {
          fontSize: "1.7rem",
        },
      });
      return false;
    }

    if (!/^\w+@(gmail|yahoo).com$/.test(email)) {
      toast.error("Email is not valid", {
        style: {
          fontSize: "1.7rem",
        },
      });
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    const checkValue = validateForm(account.email, account.password);
    if (checkValue) {
      try {
        const response = await axiosInstance.post(
          "/auth/login",
          {
            email: account.email,
            password: account.password,
          },
          { withCredentials: true }
        );
        if (response.data.status == "OK") {
          localStorage.setItem("user", JSON.stringify(response.data.data));
          dispatch(login(response.data.data));
        }
        // xử lý logic ở đây
        toast.success("Login success!", {
          style: {
            fontSize: "1.7rem",
          },
        });
        if (response.data.data.role == "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
        setShowLogin(false);
      } catch (err) {
        toast.error(err.response.data.message, {
          style: {
            fontSize: "1.7rem",
          },
        });
        return;
      }
    }
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
