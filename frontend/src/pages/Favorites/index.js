import { addToCart } from "features/product/cartSlice";
import { removed } from "../../features/product/favoritesSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((state) => state?.favorites);
  const dispatch = useDispatch();
  const handleAdd = (details) => {
    dispatch(addToCart(details));
  };

  return (
    <section className="favorites">
      <div className="favorites__title">
        <h1>Favorites</h1>
      </div>
      <div className="favorites__container">
        {favorites.favoritesItems.length === 0 ? (
          <div className="favorites__empty">
            <p>Your favorites is currently empty</p>
            <h3>
              <Link to="/product" className="favorites__empty__link">
                Start now
              </Link>
            </h3>
          </div>
        ) : (
          favorites.favoritesItems.map((productItem) => (
            <div className="favorites__card" key={productItem.id}>
              <Link to={`/product/${productItem.id}`}>
                <div className="favorites__card__img">
                  <img src={productItem.image} alt={productItem.title} />
                </div>
                <div className="favorites__card__title">
                  <h3>{productItem?.title}</h3>
                </div>
              </Link>
              <button className="addBtn" onClick={() => handleAdd(productItem)}>
                Add to Cart
              </button>
              <button
                className="remove"
                onClick={() => dispatch(removed(productItem))}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Favorites;
