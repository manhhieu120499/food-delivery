import React from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import logo from "../../assets/frontend/logo.png";
import { Link, useLocation } from "react-router-dom";

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

const Navbar = () => {
  let location = useLocation();
  const user = false;
  const shoppingCart = []

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
          
        {user ? (
          <button>
            <FontAwesomeIcon className={cx("icon")} icon={faCircleUser} />
          </button>
        ) : (
          <Button text={"sign in"} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
