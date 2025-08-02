import React from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import logo from "../../assets/frontend/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/slice";
import toast from "react-hot-toast";
import axiosInstance from "../../lib/axios";

const cx = classNames.bind(styles);
const navMenu = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/menu",
    name: "Menu",
  },
  {
    path: "/mobile",
    name: "Mobile App",
  },
  {
    path: "/contact",
    name: "Contact Us",
  },
];

const stylesMessage = {
    style: {
        fontSize: '1.5rem'
    }
}

const Navbar = ({onClick=() =>{}}) => {
  let location = useLocation();
  const user = useSelector(state => state.AuthSlice.user);
  const shoppingCart = []
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault()
    try{
        const response = await axiosInstance.post('/auth/logout')
        localStorage.setItem('user', null)
        dispatch(logout())
        navigate("/")
        toast.success(response.data.message, stylesMessage)
    }catch(err) {
        toast.error(err.response.data.message, stylesMessage)
        return;
    }
    
  }

  return (
    <div className={cx("wrapper")}>
      <Link to={"/"} className={cx("logo")}>
        <img src={logo} alt="logo_shop" />
      </Link>
      <ul className={cx("list-link")}>
        {navMenu.map((navItem, index) => (
          <li key={index} className={location.pathname == navItem.path ? cx("active") : ""}>
            <Link to={navItem.path}>{navItem.name}</Link>
            <span className={cx("line")}></span>
          </li>
        ))}
      </ul>
      <div className={cx("other")}>
        <button>
          <FontAwesomeIcon className={cx("icon")} icon={faMagnifyingGlass} />
        </button>
          
        <button className={cx('shopping-cart')}>
          <Link to={'/cart'}>
            <FontAwesomeIcon className={cx("icon")} icon={faCartShopping} />
          </Link>
          {shoppingCart.length > 0 && <p className={cx('notify-circle')}></p>}
        </button>
          
        {Object.keys(user).length > 0 ? (
          <div className={cx('profile-navbar')}>
            <FontAwesomeIcon className={cx("icon")} icon={faCircleUser} />
            <div className={cx('menu-popup')}>
              <button className={cx('menu-item')} to={'/profile'}>
                <FontAwesomeIcon className={cx('icon')} icon={faUser}/>
                <span>Profile</span>
              </button>
              <button className={cx('menu-item')} to={'/logout'} onClick={handleLogout}>
                <FontAwesomeIcon className={cx('icon')} icon={faArrowCircleRight}/>
                <span>Logout</span>
              </button>
              
            </div>
          </div>
        ) : (
          <Button text={"sign in"} onClick={onClick}/>
        )}
      </div>
    </div>
  );
};

export default Navbar;
