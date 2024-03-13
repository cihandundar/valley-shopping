import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProductDetail } from "../../features/product/productSlice";
import { addToCart } from "../../features/product/cartSlice";
const ProductDetail = () => {
  const details = useSelector((state) => state?.product?.details);
  const isLoading = useSelector((state) => state?.product?.isLoading);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  const handleAdd = (details) => {
    dispatch(addToCart(details));
  };

  return (
    <div className="details">
      <div className="details__container">
        {isLoading ? (
          <div className="loading">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="details__wrapper">
            <div className="details__left">
              <img src={details.image} alt="" />
            </div>
            <div className="details__right">
              <div className="details__right__item">
                <h2>{details?.title}</h2>
              </div>
              <div className="details__right__item">
                <h2>
                  {details?.price !== undefined && details?.price !== null && (
                    <div className="product__card__price">
                      {details.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </div>
                  )}
                </h2>
              </div>
              <div className="details__right__item rating"></div>
              <div className="details__right__item">
                <p>{details?.description}</p>
              </div>
              <div className="details__right__item">
                <p>Category: {details?.category}</p>
              </div>
              <div className="details__right__btn">
                <button onClick={() => handleAdd(details)}>Add to Cart</button>
                <button>
                  <Link to="/cart">Go Cart</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
