import "./Advertisement.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, getFavorite } from "../../store/actions/favoriteActions";

export default function Advertisement({ advertisement }) {
  let applicationDeadline = new Date(advertisement.applicationDeadline).toLocaleDateString();
  const { favoriteItems } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const handleAddFavorite = (advertisement) => {
    dispatch(addToFavorite(advertisement));
  };
  const getAdvertisement = (advertisement) => {
    dispatch(getFavorite(advertisement));
  }
  return (
    <div>
      <li className="shadow-sm text-justify" key={advertisement.id}>
        <Link to={`/advertisement/${advertisement.id}`}>
          <span className="avatar">{advertisement.position?.jobName[0]}</span>
          <span className="detail">
            <small className="text-muted">
              <b>{advertisement?.employer?.companyName}</b> - {advertisement?.employer?.webSite}{" "}
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-badge-check fa-w-16">
                <path fill="#0e90ff" d="M512 256c0-37.7-23.7-69.9-57.1-82.4 14.7-32.4 8.8-71.9-17.9-98.6-26.7-26.7-66.2-32.6-98.6-17.9C325.9 23.7 293.7 0 256 0s-69.9 23.7-82.4 57.1c-32.4-14.7-72-8.8-98.6 17.9-26.7 26.7-32.6 66.2-17.9 98.6C23.7 186.1 0 218.3 0 256s23.7 69.9 57.1 82.4c-14.7 32.4-8.8 72 17.9 98.6 26.6 26.6 66.1 32.7 98.6 17.9 12.5 33.3 44.7 57.1 82.4 57.1s69.9-23.7 82.4-57.1c32.6 14.8 72 8.7 98.6-17.9 26.7-26.7 32.6-66.2 17.9-98.6 33.4-12.5 57.1-44.7 57.1-82.4zm-144.8-44.25L236.16 341.74c-4.31 4.28-11.28 4.25-15.55-.06l-75.72-76.33c-4.28-4.31-4.25-11.28.06-15.56l26.03-25.82c4.31-4.28 11.28-4.25 15.56.06l42.15 42.49 97.2-96.42c4.31-4.28 11.28-4.25 15.55.06l25.82 26.03c4.28 4.32 4.26 11.29-.06 15.56z" className=""></path>
              </svg>
            </small>
            <span className="title">{advertisement.position?.jobName}</span>
            <span className="position text-muted">{advertisement?.jobDescription}</span>
          </span>
        </Link>
        <div className="card-footer py-1 bg-light">
          <div className="d-flex primary-color-text flex-wrap justify-content-between">
            <small>{advertisement?.positionCount} Kişi</small>
            <small>{applicationDeadline}</small>
            <small>1 Gün</small>
            <small>
              <FontAwesomeIcon className="mr-1" icon={faMapMarkerAlt} /> {advertisement.city?.cityName}
            </small>
            <small>
              <button onClick={() => handleAddFavorite(advertisement)} className="btn m-0 btn-sm py-0 px-1 small btn-outline-danger">
                
                <i className="far fa-heart"></i>
              </button>
            </small>
          </div>
        </div>
      </li>
    </div>
  );
}
