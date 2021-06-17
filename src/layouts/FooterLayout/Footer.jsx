import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="row footer-top">
          <div className="col-lg-6"> 
            <a href="https://instagram.com/abdulkadirkg" target="_blank" className="logo">
              #HRMS by AbdulkadirKG
            </a>
            <span className="font-weight-light">
              - Powered By <b className="font-weight-bold">Engin DEMİROĞ</b>
            </span>
          </div>
          <div className="col-lg-2 footer-menu">
            <nav>
              <h5>Topluluk</h5>
              <ul>
                <li>
                  <a href="/#">Hakkımızda</a>
                </li>
                <li>
                  <a href="/#">Sorun Bildir</a>
                </li>
                <li>
                  <a href="/#">GitHub</a>
                </li>
                <li>
                  <a href="/#">Slack</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-2 footer-menu">
            <nav>
              <h5>Başlarken</h5>
              <ul>
                <li>
                  <a href="/#">Tanıtım</a>
                </li>
                <li>
                  <a href="/#">CV Rehberi</a>
                </li>
                <li>
                  <a href="/#">Kullanım</a>
                </li>
                <li>
                  <a href="/#">Sık Sorulan Sorular</a>
                </li>
                <li>
                  <a href="/#">İletişim</a>
                </li>
                <li>
                  <a href="/#">Kariyer</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-2 footer-menu">
            <nav>
              <h5>Kaynaklar</h5>
              <ul>
                <li>
                  <a href="/#">IK</a>
                </li>
                <li>
                  <a href="/#">Lorem</a>
                </li>
                <li>
                  <a href="/#">Ipsum</a>
                </li>
                <li>
                  <a href="/#">Dolor</a>
                </li>
                <li>
                  <a href="/#">Sit Amet</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2021 <b>AbdulkadirKG</b>. All Rights Reserved. - Made With <i className="fa fa-heart text-danger"></i>
            </p>
            <nav className="footer-menu d-inline">
              <ul>
                <li>
                  <a href="/#">Kullanım Koşulları</a>
                </li>
                <li>
                  <a href="/#">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="/#">Güvenlik</a>
                </li>
                <li>
                  <a href="/#">Sitemap</a>
                </li>
              </ul>
            </nav>
            {/* <ul className="footer-social">
            <li>
              <FontAwesomeIcon icon={}/>
            </li>
            <li>
              <a href="/#">
                <img src="img/github-logo.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src="img/facebook-logo.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src="img/dribbble-logo.svg" alt="" />
              </a>
            </li>
          </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
