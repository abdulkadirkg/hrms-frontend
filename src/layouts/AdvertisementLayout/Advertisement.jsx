import './Advertisement.css';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

export default function Advertisement({ advertisement }) {
  let applicationDeadline = new Date(advertisement.applicationDeadline).toLocaleDateString();
  return (
    <div>
      <li className="shadow-sm text-justify" key={advertisement.id}>
        <Link to={`/advertisement/${advertisement.id}`}>
          <span className="avatar">{advertisement.position?.jobName[0]}</span>
          <span className="detail">
            <small className="text-muted">
              <b>{advertisement?.employer?.companyName}</b> - {advertisement?.employer?.webSite}
            </small>
            <span className="title">{advertisement.position?.jobName}</span>
            <span className="position">{advertisement?.jobDescription}</span>
            <small className="d-block text-dark font-italic">1 Gün Önce</small>
          </span>
          {/* <span className="location">
            <FontAwesomeIcon className="mr-1" icon={faMapMarkerAlt} /> <span className="d-block">{advertisement.city?.cityName}</span>
          </span> */}
        </Link>
        <div className="card-footer py-1 bg-light">
          <div className="d-flex primary-color-text flex-wrap justify-content-around">
            <small>{advertisement?.positionCount} Kişi</small>
            <small>
              {advertisement.salaryMin} ₺ | {advertisement.salaryMax} ₺
            </small>
            <small>{applicationDeadline}</small>
            <small>
              <FontAwesomeIcon className="mr-1" icon={faMapMarkerAlt} /> {advertisement.city?.cityName}
            </small>
          </div>
        </div>
      </li>
    </div>
  );
}
