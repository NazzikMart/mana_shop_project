import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Адреса</h4>
                  <span>Україна</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Зателефонувати</h4>
                  <span>0974613997</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Електрона адреса</h4>
                  <span>nazzikmart@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    MaNa
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Магазин цифрової техніки і аксесуарів
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Наші соцмережі</span>
                  <a href="#">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Посилання</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Головна</a>
                  </li>
                  <li>
                    <a href="#">Про нас</a>
                  </li>
                  <li>
                    <a href="#">Каталог товарів</a>
                  </li>
                  <li>
                    <a href="#">Ремонт</a>
                  </li>
                  <li>
                    <a href="#">Контакти</a>
                  </li>
                  <li>
                    <a href="#">Кошик</a>
                  </li>
                  <li>
                    <a href="#">Акаунт</a>
                  </li>
               
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Напишіть нам повідомлення</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    В цьому полі ви можете написати нам повідомлення , і ми найблищим часом надамо вам відповідь
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Електрона адреса" />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2024, {" "}
                  <a href="https://codepen.io/anupkumar92/">MaNa</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Головна</a>
                  </li>
                  <li>
                    <a href="#">Про нас</a>
                  </li>
                  <li>
                    <a href="#">Контакти</a>
                  </li>
                  <li>
                    <a href="#">Товари</a>
                  </li>
                  <li>
                    <a href="#">Ремонт</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
