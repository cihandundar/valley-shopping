import React, { useEffect, useState } from "react";
import { message } from "antd";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products`);

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="item">
      {products.length > 0 && (
        <div className="item__container">
          <div className="item__title">
            <h2>Product</h2>
          </div>
          <div className="item__wrapper">
            {products.map((product) => (
              <div className="item__box" key={product.id}>
                <div className="item__img">
                  <img src={product.img} alt="" />
                </div>
                <div className="item__name">
                  <h3>{product.name}</h3>
                </div>
                <div className="item__price">${product.price.current}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
