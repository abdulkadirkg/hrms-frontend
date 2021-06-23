import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSelector } from "react-redux";
import PreloaderUtil from "../../utils/PreloaderUtil/Preloader";

import ErrorAlert from "../../utils/ErrorUtil/ErrorAlert";

export default function Banner() {
  const { cities, error, pending } = useSelector((state) => state.allCities);
  const { jobTypes, errorJobTypes,pendingJobTypes } = useSelector(state => state.jobTypes);
  const { positions, errorPositions, pendingPositions} = useSelector(state => state.positions)
  return (
    <div>
      <section className="banner-section">
        <div className="container border-main shadow-lg text-dark">
          <div className="form-row">
            <div className="col-xl-5">
              <input type="text" className="form-control form-control-sm font-weight-light" placeholder="Pozisyon Ara" />
              <div className="mb-1 d-block">
                {pendingPositions ? (
                  <PreloaderUtil />
                ) : errorPositions ? (
                  <ErrorAlert error={error} />
                ) : (
                  positions.slice(0, 3).map((position) => (
                    <small className="btn btn-sm btn-light mt-1 border border-none city-badge" key={position.id} value={position}>
                      <i className="fa fa-desktop"/> {position.jobName}
                    </small>
                  ))
                )}
              </div>
            </div>
            <div className="col-xl-3">
              <select className="form-control-sm font-weight-light form-control mr-sm-2" id="inlineFormCustomSelect">
                <option>İş Tipi Seçiniz</option>
                {jobTypes.map((jobType) => (
                  <option key={jobType.id} value={jobType}>
                    {jobType.jobType}
                  </option>
                ))}
              </select>
              <div className="mb-1">
                {pendingJobTypes ? (
                  <PreloaderUtil />
                ) : errorJobTypes ? (
                  <ErrorAlert error={error} />
                ) : (
                  jobTypes.slice(0, 3).map((jobType) => (
                    <small className="btn btn-sm btn-light mt-1 border border-none city-badge" key={jobType.id} value={jobType}>
                      <i className="far fa-clock"/> {jobType.jobType}
                    </small>
                  ))
                )}
              </div>
            </div>
            <div className="col-xl-3">
              <select className="form-control-sm font-weight-light form-control mr-sm-2" id="inlineFormCustomSelect">
                <option>Şehir Seçiniz</option>
                {cities.map((city) => (
                  <option key={city.id} value={city}>
                    {city.cityName}
                  </option>
                ))}
              </select>
              <div className="mb-1">
                {pending ? (
                  <PreloaderUtil />
                ) : error ? (
                  <ErrorAlert error={error} />
                ) : (
                  cities.slice(0, 3).map((city) => (
                    <small className="btn btn-sm btn-light mt-1 border border-none city-badge" key={city.id} value={city}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> {city.cityName}
                    </small>
                  ))
                )}
              </div>
            </div>
            <div className="col-xl-1 h-100">
              <button className="btn btn-block btn-light font-weight-bold my-auto btn-sm border btn-main shadow">
                <FontAwesomeIcon icon={faSearch} /> Ara
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
