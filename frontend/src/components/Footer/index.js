import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ReplayIcon from "@mui/icons-material/Replay";
import PaymentIcon from "@mui/icons-material/Payment";
import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top__container">
          <div className="footer__top__item">
            <span className="footer__top__item__icon">
              <LocalShippingIcon />
            </span>
            <div className="footer__top__item__text">
              <span>FREE DELIVERY</span>
              <p>From $60.00</p>
            </div>
          </div>
          <div className="footer__top__item">
            <span className="footer__top__item__icon">
              <SupportAgentIcon />
            </span>
            <div className="footer__top__item__text">
              <span>SUPPORT 24/7</span>
              <p>Online 24 hours</p>
            </div>
          </div>
          <div className="footer__top__item">
            <span className="footer__top__item__icon">
              <ReplayIcon />
            </span>
            <div className="footer__top__item__text">
              <span>30 DAYS RETURN</span>
              <p>Simply return it within 30 days</p>
            </div>
          </div>
          <div className="footer__top__item">
            <span className="footer__top__item__icon">
              <PaymentIcon />
            </span>
            <div className="footer__top__item__text">
              <span>PAYMENT METHOD</span>
              <p>Secure Payment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__center">
        <div className="footer__center__container">
          <div className="footer__center__left">
            <div className="footer__center__left__title">
              <h2>
                Get our emails for info on new items,
                <br /> sales and more.
              </h2>
              <p>
                We'll email you a voucher worth $10 off your first order over
                $50.
              </p>
            </div>
            <div className="footer__center__left__input">
              <input type="text" placeholder="Enter your email address." />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer__center__right">
            <div className="footer__center__right__title">
              <h2>Need help?</h2>
              <h2>(+90) 123 456 78 90</h2>
              <p>We are available 8:00am – 7:00pm</p>
            </div>
            <div className="footer__center__right__logo">
              <img src={appStore} alt="" />
              <img src={googlePlay} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__container">
          <div className="footer__bottom__left">
            <h1>WARCRAFT</h1>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra{" "}
              <br />
              maecenas accumsan lacus vel facilisis in termapol.
            </p>
            <p>
              <strong>(+800) 1234 5678 90 </strong> - info@example.com{" "}
            </p>
          </div>
          <div className="footer__bottom__list">
            <h4>Information</h4>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
              <li>Shipping Policy</li>
              <li>Dropshipping</li>
            </ul>
          </div>
          <div className="footer__bottom__list">
            <h4>Account</h4>
            <ul>
              <li>Dashboard</li>
              <li>My Orders</li>
              <li>My Wishlist</li>
              <li>Account Details</li>
              <li>Track My Orders</li>
            </ul>
          </div>
          <div className="footer__bottom__list">
            <h4>Shop</h4>
            <ul>
              <li>Affiliate</li>
              <li>Bestsellers</li>
              <li>Discount</li>
              <li>Latest Products</li>
              <li>Sale Products</li>
            </ul>
          </div>
          <div className="footer__bottom__list">
            <h4>Categories</h4>
            <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Jewelery</li>
              <li>Electronics</li>
              <li>All</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
