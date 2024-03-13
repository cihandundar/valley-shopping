import { Hero } from "components";
import React from "react";

const Home = () => {
  return (
    <main className="home">
      <section>
        <div className="home__hero">
          <Hero />
        </div>
      </section>
    </main>
  );
};

export default Home;
