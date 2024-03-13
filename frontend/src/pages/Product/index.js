import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProduct,
  fetchProductsByCategory,
  searchProducts,
} from "../../features/product/productSlice";
import { FaSearch, FaCartArrowDown, FaEye } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import { addToCart } from "../../features/product/cartSlice";
import { addToFavorites, removed } from "../../features/product/favoritesSlice";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const favorites = useSelector((state) => state?.favorites?.favoritesItems);
  const items = useSelector((state) => state?.product?.item);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.product?.isLoading);

  useEffect(() => {
    if (selectedCategory === "all") {
      dispatch(fetchProduct());
    } else {
      dispatch(fetchProductsByCategory(selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = () => {
    dispatch(searchProducts(searchTerm));
  };

  const filteredItems = searchTerm
    ? items.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : items.filter((product) =>
        selectedCategory === "all"
          ? true
          : product.category === selectedCategory
      );

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  const handleFavorites = (product) => {
    const isSelected = favorites.some((favorite) => favorite.id === product.id);
    if (isSelected) {
      dispatch(removed(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <div className="product">
      <div className="product__filter__wrapper">
        <div className="product__search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
        <div className="product__category">
          <label>Category Filter: </label>
          <div className="product__category__btn">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={category === selectedCategory ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="product__container">
        <div className="product__wrapper">
          {isLoading ? (
            <div className="loading">
              <span className="loader"></span>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="no-results">
              <h2>Product not found</h2>
            </div>
          ) : (
            filteredItems.map((product) => (
              <div className="product__card" key={product.id}>
                <div className="product__card__img">
                  <img src={product.image} alt="" />
                </div>
                <div className="product__card__title">
                  <h3>{product.title}</h3>
                </div>
                {product.price !== undefined && product.price !== null && (
                  <div className="product__card__price">
                    {product.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                )}
                <div className="product__card__btn">
                  <button onClick={() => handleAdd(product)}>
                    <FaCartArrowDown />
                  </button>
                  <button>
                    <Link to={`/product/${product.id}`}>
                      <FaEye />
                    </Link>
                  </button>
                  <button onClick={() => handleFavorites(product)}>
                    {favorites.some(
                      (favorite) => favorite.id === product.id
                    ) ? (
                      <MdFavorite />
                    ) : (
                      <MdFavoriteBorder />
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
