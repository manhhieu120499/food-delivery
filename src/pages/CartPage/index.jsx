import React, { useEffect, useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./CartPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initShoppingCart, removeFood } from "../../redux/shoppingCart/slice";
import toast from "react-hot-toast";

const cx = classNames.bind(styles);

const CartPage = () => {
  const { carts } = useSelector((state) => state.ShoppingCartSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subTotal = useMemo(() => {
    return carts.reduce(
      (total, cur) =>
        total + Number.parseInt(cur.quantity) * Number.parseFloat(cur.price),
      0
    );
  }, [carts]);

  useEffect(() => {
    if (carts.length == 0) {
      try {
        const localCarts = JSON.parse(localStorage.getItem("carts"));
        if (localCarts && localCarts.length > 0) {
          dispatch(initShoppingCart({ carts: localCarts }));
        }
      } catch {
        dispatch(initShoppingCart({ carts: [] }));
      }
    }
  }, [dispatch, carts]);

  const handleRemoveFood = (foodId) => {
    dispatch(removeFood({ foodId }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (carts.length == 0) {
      toast.error("Not payment when you don't have any food in shopping cart", {
        style: {
          fontSize: "1.5rem",
        },
      });
      return;
    }
    navigate("/payment");
  };
  return (
    <>
      <div className={cx("wrapper-cart")}>
        {/** table order food */}
        <table className={cx("table-order")}>
          <thead className={cx("table-head")}>
            <tr>
              <th>Item</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className={cx("table-body")}>
            {carts.length > 0 ? (
              carts.map((item, index) => (
                <tr key={index} className={cx("row")}>
                  <td>
                    <img
                      src={
                        item.pic ||
                        "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482784hOI/anh-mo-ta.png"
                      }
                      className={cx("image-order")}
                      alt="image-order"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <span className={cx("quantity")}>{item.quantity}</span>
                  </td>
                  <td>
                    $
                    {Number.parseFloat(item.price) *
                      Number.parseInt(item.quantity)}
                  </td>
                  <td>
                    <button
                      className={cx("btn-remove")}
                      onClick={() => handleRemoveFood(item.id)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className={cx("row")}>
                <td colSpan={6} style={{ textAlign: "center", color: "#333" }}>
                  No food in shopping cart
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/** payment */}
        <div className={cx("payment-total")}>
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
            <Link to={"/payment"} onClick={handlePayment}>
              <button className={cx("btn-pay")}>PROCESS TO CHECKOUT</button>
            </Link>
          </div>
          <div className={cx("discount")}>
            <p className={cx("discount-des")}>
              If you have promo code, Enter it here
            </p>
            <div className={cx("promo-discount")}>
              <input className={cx("promo-code")} placeholder="promo code" />
              <button className={cx("btn-submit-code")}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
