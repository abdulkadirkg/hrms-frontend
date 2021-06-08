import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import CityService from "../services/cityService";

export default function Filters() {
      const [cities, setCities] = useState([]);
      useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then((result) => {
          setCities(result.data.data);
        });
      }, []);
  return (
    <div>
      <aside className="component--job-filter shadow-sm">
        <form action="">
          <div className="search mb-3">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Kelime İle Ara"
            />
          </div>
          <hr className="mt-0" />
          <h5 className="font-weight-bold">
            <FontAwesomeIcon icon={faFilter} /> İş Türleri
          </h5>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
                <span className="text">Tümü</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
                <span className="text">Tam Zamanlı</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
                <span className="text">Yarı Zamanlı</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
                <span className="text">Freelance</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
                <span className="text">Stajyer</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span className="checkbox"></span>
                <span className="text">Remote</span>
              </label>
            </li>
          </ul>
          <hr />
          <h5 className="font-weight-bold">
            <FontAwesomeIcon icon={faLocationArrow} /> Konum
          </h5>
          <ul className="filter-form">
            <li>
              <label htmlFor="country">Ülke/Şehir</label>
              <select name="" id="country">
                <option value="">Türkiye</option>
              </select>
            </li>
            <li>
              <label htmlFor="city">Şehir</label>
              <select name="" id="city">
                {cities.map((city) => (
                  <option key={city.id} value={city}>
                    {city.cityName}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <button type="submit">Uygula</button>
            </li>
          </ul>
        </form>
      </aside>
    </div>
  );
}
