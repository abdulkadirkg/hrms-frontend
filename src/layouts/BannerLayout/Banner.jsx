import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

import PositionService from "../../services/positionService";
import CityService from "../../services/cityService";
import JobTypeService from "../../services/jobTypeService";

export default function Banner() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCitiesByCount(3).then((result) => {
      setCities(result.data.data);
    });
  }, []);

  const [positions, setPositions] = useState([]);
  useEffect(() => {
    let positionService = new PositionService();
    positionService.getPositionsByCount(3).then((result) => {
      setPositions(result.data.data);
    });
  }, []);

  const [jobTypes, setJobTypes] = useState([]);
  useEffect(() => {
    let jobTypeService = new JobTypeService();
    jobTypeService.getJobTypesByCount(2).then((result) => {
      setJobTypes(result.data.data);
    });
  }, []);
  return (
    <>
      <section className="banner-section">
        <div className="container border-main shadow-lg text-dark">
          <div className="form-row">
            <div className="col-xl-5">
              <input
                type="text"
                className="form-control form-control-sm font-weight-light"
                placeholder="Pozisyon Ara"
              />
              <div className="my-1 d-block">
                {positions.map((position) => (
                  <small
                    className="btn btn-sm btn-light mt-1 border border-none city-badge"
                    key={position.id}
                    value={position}
                  >
                    <FontAwesomeIcon icon={faLaptop} /> {position.jobName}
                  </small>
                ))}
              </div>
            </div>
            <div className="col-xl-3">
              <select
                className="form-control-sm font-weight-light form-control mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option>İş Tipi Seçiniz</option>
                {jobTypes.map((jobType) => (
                  <option key={jobType.id} value={jobType}>
                    {jobType.jobType}
                  </option>
                ))}
              </select>
              <div className="my-1">
                {jobTypes.map((jobType) => (
                  <small
                    className="btn btn-sm btn-light mt-1 border border-none city-badge"
                    key={jobType.id}
                    value={jobType}
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {jobType.jobType}
                  </small>
                ))}
              </div>
            </div>
            <div className="col-xl-3">
              <select
                className="form-control-sm font-weight-light form-control mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option>Şehir Seçiniz</option>
                {cities.map((city) => (
                  <option key={city.id} value={city}>
                    {city.cityName}
                  </option>
                ))}
              </select>
              <div className="my-1">
                {cities.map((city) => (
                  <small
                    className="btn btn-sm btn-light mt-1 border border-none city-badge"
                    key={city.id}
                    value={city}
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {city.cityName}
                  </small>
                ))}
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
    </>
  );
}
