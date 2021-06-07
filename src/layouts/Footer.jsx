import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="site-footer mt-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>Hakkımızda</h6>
              <p class="text-justify">
                Bu proje Java - React kullanılarak Abdulkadir KARADAĞ tarafından geliştirilmiştir.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Hizmetler</h6>
              <ul class="footer-links">
                <li>Kariyer Planlama</li>
                <li>Danışmanlık</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Hızlı Linkler</h6>
              <ul class="footer-links">
                <li>Hakkımızda</li>
                <li>Bize Ulaşın</li>
                <li>Gizlilik Politikası</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by <b>AbdulkadirKG</b>.
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
