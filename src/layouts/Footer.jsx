import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-top">
          <a href="#" class="logo">
            #HRMS by AbdulkadirKG
          </a>
          <div class="footer-menu">
            <nav>
              <h5>Topluluk</h5>
              <ul>
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Sorun Bildir</a>
                </li>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Slack</a>
                </li>
              </ul>
            </nav>
            <nav>
              <h5>Başlarken</h5>
              <ul>
                <li>
                  <a href="#">Tanıtım</a>
                </li>
                <li>
                  <a href="#">CV Rehberi</a>
                </li>
                <li>
                  <a href="#">Kullanım</a>
                </li>
                <li>
                  <a href="#">Sık Sorulan Sorular</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
                <li>
                  <a href="#">Kariyer</a>
                </li>
              </ul>
            </nav>
            <nav>
              <h5>Kaynaklar</h5>
              <ul>
                <li>
                  <a href="#">IK</a>
                </li>
                <li>
                  <a href="#">Lorem</a>
                </li>
                <li>
                  <a href="#">Ipsum</a>
                </li>
                <li>
                  <a href="#">Dolor</a>
                </li>
                <li>
                  <a href="#">Sit Amet</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            &copy; 2021 <b>AbdulkadirKG</b>. All rights reserved.
          </p>
          <nav class="footer-menu">
            <ul>
              <li>
                <a href="#">Kullanım Koşulları</a>
              </li>
              <li>
                <a href="#">Gizlilik Politikası</a>
              </li>
              <li>
                <a href="#">Güvenlik</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </nav>
          <ul class="footer-social">
            <li>
              <a href="#">
                <img src="img/twitter-logo.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/github-logo.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/facebook-logo.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/dribbble-logo.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
