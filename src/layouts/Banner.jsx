import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import CityService from "../services/cityService";
import PositionService from "../services/positionService";

export default function Banner() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => {
      setCities(result.data.data);
    });
  }, []);

  const [positions, setPositions] = useState([]);
  useEffect(() => {
    let positionService = new PositionService();
    positionService.getPositions().then((result) => {
      setPositions(result.data.data);
    });
  });
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="form-row">
            <div className="col-xl-7">
              <input
                type="text"
                className="form-control"
                placeholder="Pozisyon Ara"
              />
              <div className="my-1 d-block">
                {positions.map((position) => (
                  <small
                    className="btn btn-sm btn-outline-light city-badge"
                    key={position.id}
                    value={position}
                  >
                    <FontAwesomeIcon icon={faLaptop} /> {position.jobName}
                  </small>
                ))}
              </div>
            </div>
            <div className="col-xl-4">
              <select
                className="custom-select mr-sm-2"
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
                <small className="btn btn-sm btn-outline-light city-badge">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Remote
                </small>
                {cities.map((city) => (
                  <small
                    className="btn btn-sm btn-outline-light city-badge"
                    key={city.id}
                    value={city}
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {city.cityName}
                  </small>
                ))}
              </div>
            </div>
            <div className="col-xl-1">
              <button className="btn btn-block btn-secondary">
                <FontAwesomeIcon icon={faSearch} /> Ara</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
