import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faLink,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./AdvertisementDetailBox.css";
export default function AdvertisementDetailBox({ advertisement }) {
  return (
    <div>
      <div className="container my-4 shadow-sm bg-white shadow rounded p-3">
        <div className="row">
          <div className="col-9 my-auto d-flex flex-column">
            <strong className="h3 font-weight-bold mb-0 primary-color-text">
              {advertisement.employer.companyName}
            </strong>
            <small className="text-secondary">
              <a
                href={"http://" + advertisement.employer.webSite}
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />{" "}
                {advertisement.employer.webSite}
              </a>
            </small>
            <small className="text-secondary">
              <FontAwesomeIcon icon={faPhone} /> {advertisement.employer.phone}
            </small>
          </div>
          <div className="col-3 my-auto text-center font-weight-light">
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              {advertisement.city.cityName}
            </span>
          </div>
        </div>
        <hr />
        <strong className="d-block text-center">
          <h3 className="m-0 font-weight-bold primary-color-text">{advertisement.position.jobName}</h3>
          <small className="m-0">Diğer <span className="primary-color-text">{advertisement.position.jobName}</span> ilanlarını görmek için tıklayabilirsiniz.</small>
        </strong>
        <div class="explain-bar">
          <div class="explain-contents">
            <div class="explain-title">Pozisyon Sayısı</div>
            <div class="explain-subtitle">
              {advertisement.positionCount} Kişi
            </div>
          </div>
          <div class="explain-contents">
            <div class="explain-title">İş Tipi</div>
            <div class="explain-subtitle">{advertisement.jobType?.jobType}</div>
          </div>
          <div class="explain-contents">
            <div class="explain-title">Minimum Ücret</div>
            <div class="explain-subtitle">
              {advertisement.salaryMin} ₺ / Aylık
            </div>
          </div>
          <div class="explain-contents">
            <div class="explain-title">Maksimum Ücret</div>
            <div class="explain-subtitle">
              {advertisement.salaryMax} ₺ / Aylık
            </div>
          </div>
        </div>
        <hr />
        <h5 className="font-weight-bold primary-color-text">İş Açıklaması</h5>
        <p className="font-weight-light">{advertisement.jobDescription}</p>
        <hr />
        <div className="row">
          <div className="col-12">
            <button className="btn btn-block btn-main d-none">
              <FontAwesomeIcon icon={faCheckSquare} /> Başvur
            </button>
            <div className="please-login d-block text-center bg-main rounded border p-3">
              <span className="d-block text-muted ">
                Başvurmak İçin Lütfen Giriş Yapın. Üye Değilseniz Kolayca Üye
                Olabilirsiniz.
              </span>
              <span className="d-block primary-color-text">
                <a href="#/" className="font-weight-bold">
                  Giriş Yap
                </a>{" "}
                |{" "}
                <a href="#/" className="font-weight-bold">
                  Kayıt Ol
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
