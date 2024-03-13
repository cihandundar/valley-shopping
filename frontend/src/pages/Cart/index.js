import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  remove,
} from "../../features/product/cartSlice";

const Cart = () => {
  const item = useSelector((state) => state?.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCart = (item, type) => {
    if (type === "remove") return dispatch(remove(item));
    if (type === "decrease") return dispatch(decreaseCart(item));
    if (type === "increase") return dispatch(addToCart(item));

    // switch (type) {
    //   case "remove":
    //     return dispatch(remove(item));
    //   case "decrease":
    //     return dispatch(decreaseCart(item));
    //   case "increase":
    //     return dispatch(addToCart(item));
    //   case "clear":
    //     return dispatch(clearCart());
    //   default:
    //     console.log("do nothing");
    // }
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [item, dispatch]);

  return (
    <div className="cart">
      <div className="cart__container">
        {item.cartItems.length === 0 ? (
          <div className="cart__empty">
            <h3>Your cart is currently empty</h3>
            <div className="cart__shopping">
              <Link to="/product">
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart__wrapper">
            <h2>Shopping Cart</h2>
            <div className="cart__wrapper__title">
              <h3>Product</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Total</h3>
            </div>
            {item?.cartItems?.map((items) => (
              <div className="cart__box" key={items?.id}>
                <div className="cart__box__img">
                  <Link to={`/product/${items.id}`}>
                    <img src={items?.image} alt="" />
                  </Link>
                  <div className="cart__box__title">
                    <h3>{items?.title}</h3>
                    <button onClick={() => handleCart(items, "remove")}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart__box__price">
                  {items?.price !== undefined && items?.price !== null && (
                    <div>
                      {items?.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </div>
                  )}
                </div>
                <div className="cart__box__quantity">
                  <button onClick={() => handleCart(items, "decrease")}>
                    -
                  </button>
                  <div className="count">{items.cartQuantity}</div>
                  <button onClick={() => handleCart(items, "increase")}>
                    +
                  </button>
                </div>
                <div className="cart__box__total">
                  {(items?.price * items?.cartQuantity).toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "USD",
                    }
                  )}
                </div>
              </div>
            ))}
            <div className="cart__box__summary">
              <div className="cart__box__checkout">
                <div className="cart__box__clear">
                  <button className="clear" onClick={() => handleClearCart()}>
                    Clear Cart
                  </button>
                </div>
                <div className="subtotal">
                  <div>
                    <span>Subtotal</span>
                    <h3>
                      {item?.cartTotalAmount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h3>
                  </div>
                  <Link to="#">
                    <button className="check">Check out</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
