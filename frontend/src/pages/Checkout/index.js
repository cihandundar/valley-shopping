import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, remove } from "../../features/product/cartSlice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const Checkout = () => {
  const item = useSelector((state) => state?.cart);
  const [subtotal, setSubtotal] = useState(0);
  const [formError, setFormError] = useState(null);

  const dispatch = useDispatch();

  const handleCart = (item, type) => {
    if (type === "remove") return dispatch(remove(item));
  };

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  useEffect(() => {
    let total = 0;
    item.cartItems.forEach((items) => {
      total += items.price * items.cartQuantity;
    });
    setSubtotal(total);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!number || !name || !expiry || !cvc) {
      setFormError("Please fill out all fields");
    } else {
      if (!/^\d+$/.test(number) || !/^\d+$/.test(cvc)) {
        setFormError("Please enter valid number for card number and cvc");
        return;
      }
      setFormError(null);
      window.location.href = "/success";
      dispatch(clearCart());
    }
  };

  return (
    <div className="checkout">
      <div className="checkout__wrapper">
        <div className="checkout__container">
          {item?.cartItems?.length === 0 ? (
            <div className="checkout__empty">
              <div className="cart__shopping">
                <Link to="/product">
                  <span>Go shopping now</span>
                </Link>
              </div>
            </div>
          ) : (
            <>
              {item?.cartItems?.map((items) => (
                <div className="checkout__box" key={items?.id}>
                  <div className="checkout__box__img">
                    <Link to={`/product/${items.id}`}>
                      <img src={items?.image} alt="" />
                    </Link>
                    <div className="checkout__box__wrapper">
                      <div className="checkout__box__title">
                        <h3>{items?.title}</h3>
                        <button onClick={() => handleCart(items, "remove")}>
                          <HighlightOffIcon />
                        </button>
                      </div>

                      <div className="checkout__box__price">
                        {items?.price !== undefined &&
                          items?.price !== null && (
                            <div>
                              {items?.price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              })}
                            </div>
                          )}
                      </div>
                      <div className="checkout__box__quantity">
                        <div className="count">
                          Quantity: {items.cartQuantity}
                        </div>
                      </div>
                      <div className="checkout__box__total">
                        {(items?.price * items?.cartQuantity).toLocaleString(
                          "en-US",
                          {
                            style: "currency",
                            currency: "USD",
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="subtotal">
                <span>Subtotal</span>
                <h3>
                  {subtotal.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </h3>
              </div>
            </>
          )}
        </div>
        {item?.cartItems?.length > 0 && (
          <div className="payment">
            <div className="payment__container">
              <div className="payment__form">
                <Cards
                  number={number}
                  name={name}
                  expiry={expiry}
                  cvc={cvc}
                  focused={focus}
                />
                <form onSubmit={handleSubmit}>
                  <input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    maxLength="16"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    maxLength="16"
                  />
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY Expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    maxLength="6"
                  />
                  <input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    maxLength="3"
                  />
                  {formError && (
                    <p className="error" style={{ color: "red" }}>
                      {formError}
                    </p>
                  )}
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
