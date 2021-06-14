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
              <b>{advertisement?.employer?.companyName}</b> - {advertisement?.employer?.webSite}{" "}
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-badge-check fa-w-16">
                <path fill="#0e90ff" d="M512 256c0-37.7-23.7-69.9-57.1-82.4 14.7-32.4 8.8-71.9-17.9-98.6-26.7-26.7-66.2-32.6-98.6-17.9C325.9 23.7 293.7 0 256 0s-69.9 23.7-82.4 57.1c-32.4-14.7-72-8.8-98.6 17.9-26.7 26.7-32.6 66.2-17.9 98.6C23.7 186.1 0 218.3 0 256s23.7 69.9 57.1 82.4c-14.7 32.4-8.8 72 17.9 98.6 26.6 26.6 66.1 32.7 98.6 17.9 12.5 33.3 44.7 57.1 82.4 57.1s69.9-23.7 82.4-57.1c32.6 14.8 72 8.7 98.6-17.9 26.7-26.7 32.6-66.2 17.9-98.6 33.4-12.5 57.1-44.7 57.1-82.4zm-144.8-44.25L236.16 341.74c-4.31 4.28-11.28 4.25-15.55-.06l-75.72-76.33c-4.28-4.31-4.25-11.28.06-15.56l26.03-25.82c4.31-4.28 11.28-4.25 15.56.06l42.15 42.49 97.2-96.42c4.31-4.28 11.28-4.25 15.55.06l25.82 26.03c4.28 4.32 4.26 11.29-.06 15.56z" class=""></path>
              </svg>
            </small>
            <span className="title">{advertisement.position?.jobName}</span>
            <span className="position">{advertisement?.jobDescription}</span>
            {/* <small className="d-block text-dark font-italic">1 Gün Önce</small> */}
          </span>
          {/* <span className="location">
            <FontAwesomeIcon className="mr-1" icon={faMapMarkerAlt} /> <span className="d-block">{advertisement.city?.cityName}</span>
          </span> */}
        </Link>
        <div className="card-footer py-1 bg-light">
          <div className="d-flex primary-color-text flex-wrap justify-content-around">
            <small>{advertisement?.positionCount} Kişi</small>
            <small>{applicationDeadline}</small>
            <small>
              {/* {advertisement.salaryMin} ₺ | {advertisement.salaryMax} ₺ */}
              1 Gün Önce
            </small>
            <small>
              <FontAwesomeIcon className="mr-1" icon={faMapMarkerAlt} /> {advertisement.city?.cityName}
            </small>
          </div>
        </div>
      </li>
    </div>
  );
}
