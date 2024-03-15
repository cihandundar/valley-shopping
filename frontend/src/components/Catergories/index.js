import React, { useEffect, useState } from "react";
import { message } from "antd";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/categories`);

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="category">
      <div className="category__container">
        <div className="category__container__title">
          <h2>All Categories</h2>
        </div>
        <div className="category__item">
          {categories.map((category) => (
            <div className="category__wrapper" key={category.id}>
              <div className="category__img">
                {category.img && (
                  <div className="category__img">
                    <img src={category.img} alt="" />
                  </div>
                )}
              </div>
              <div className="category__name">
                <h3>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
