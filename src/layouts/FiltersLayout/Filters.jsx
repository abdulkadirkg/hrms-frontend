import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFilter, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import "./Filters.css";
import React, { useState, useEffect } from "react";
import CityService from "../../services/cityService";
import JobTypeService from "../../services/jobTypeService";
import PositionService from "../../services/positionService";

export default function Filters() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => {
      setCities(result.data.data);
    });
  }, []);

  const [jobTypes, setJobTypes] = useState([]);
  useEffect(() => {
    let jobTypeService = new JobTypeService();
    jobTypeService.getJobTypes().then((result) => {
      setJobTypes(result.data.data);
    });
  }, []);

  const [positions, setPositions] = useState([]);
  useEffect(() => {
    let positionService = new PositionService();
    positionService.getPositions().then((result) => {
      setPositions(result.data.data);
    });
  }, []);
  return (
    <div>
      <aside className="component--job-filter shadow-sm">
        <form action="">
          <div className="search mb-3">
            <input type="text" className="form-control shadow-sm" placeholder="Kelime İle Ara" />
          </div>
          <hr className="mt-0" />
          <h5 className="font-weight-bold primary-color-text">
            <FontAwesomeIcon icon={faFilter} /> İş Türleri
          </h5>
          <ul className="checkbox-list">
            {jobTypes.map((jobType) => (
              <li key={jobType.id} value={jobType}>
                <label>
                  <input type="checkbox" />
                  <span className="checkbox"></span>
                  <span className="text">{jobType.jobType}</span>
                </label>
              </li>
            ))}
          </ul>
          <ul className="filter-form">
            <li>
              <label htmlFor="position">Pozisyon</label>
              <select name="position" id="position">
                {positions.map((position) => (
                  <option key={position.id} value={position}>
                    {position.jobName}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <hr />
          <h5 className="font-weight-bold primary-color-text">
            <FontAwesomeIcon icon={faLocationArrow} /> Konum
          </h5>
          <ul className="filter-form">
            <li>
              <label htmlFor="country">Ülke/Şehir</label>
              <select name="country" id="country">
                <option value="">Türkiye</option>
              </select>
            </li>
            <li>
              <label htmlFor="city">Şehir</label>
              <select name="city" id="city">
                {cities.map((city) => (
                  <option key={city.id} value={city}>
                    {city.cityName}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <button type="submit">
                <FontAwesomeIcon icon={faCheckCircle} /> Uygula
              </button>
            </li>
          </ul>
        </form>
      </aside>
    </div>
  );
}
