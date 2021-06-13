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
    <div className="container">
      <div className="my-4 shadow-sm bg-white shadow rounded p-3">
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
            <small className="text-danger">
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
        <div className="explain-bar">
          <div className="explain-contents">
            <div className="explain-title">Pozisyon Sayısı</div>
            <div className="explain-subtitle">
              {advertisement.positionCount} Kişi
            </div>
          </div>
          <div className="explain-contents">
            <div className="explain-title">İş Tipi</div>
            <div className="explain-subtitle">{advertisement.jobType?.jobType}</div>
          </div>
          <div className="explain-contents">
            <div className="explain-title">Minimum Ücret</div>
            <div className="explain-subtitle">
              {advertisement.salaryMin} ₺ / Aylık
            </div>
          </div>
          <div className="explain-contents">
            <div className="explain-title">Maksimum Ücret</div>
            <div className="explain-subtitle">
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
                Başvurmak İçin Lütfen Giriş Yapın. Üye Değilseniz Kariyerinizde Yeni Bir Sayfa Açmak İçin Üye Olun.
              </span>
              <span className="d-block primary-color-text">
                <a href="#/" className="font-weight-bold">
                  Giriş Yap
                </a>{" "}
                |{" "}
                <a href="#/" className="font-weight-bold">
                  Üye Ol
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
