import React from "react";
import { Footer, Navbar } from "../components";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
