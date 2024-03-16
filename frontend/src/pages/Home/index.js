import React from "react";
import { Categories, Hero, Product } from "../../components";

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <Categories />
      <Product />
    </main>
  );
};

export default Home;
