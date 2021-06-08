import {
  faArrowRight,
  faFilter,
  faLocationArrow,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import AdvertisementService from "../services/advertisementService";

export default function Lastest() {
  const [advertisements, setAdvertisements] = useState([]);
  useEffect(() => {
    let advertisementService = new AdvertisementService();
    advertisementService
      .getAdvertisements()
      .then((result) => setAdvertisements(result.data.data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-3 d-none d-lg-block">
            <strong>
              <h4 className="font-weight-bold ">Filtreler</h4>
            </strong>
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
                      <option value="">Türkiye</option>
                      <option value="">Türkiye</option>
                      <option value="">Türkiye</option>
                    </select>
                  </li>
                  <li>
                    <label htmlFor="city">City</label>
                    <select name="" id="city">
                      <option value="">İstanbul</option>
                      <option value="">Ankara</option>
                      <option value="">İzmir</option>
                      <option value="">Bursa</option>
                    </select>
                  </li>
                  <li>
                    <button type="submit">Uygula</button>
                  </li>
                </ul>
              </form>
            </aside>
          </div>
          <div className="col-lg-9">
            <strong>
              <h4 className="font-weight-bold">İlanlar</h4>
            </strong>

            <div className="advertisements">
              <ul className="component--job-items">
                {advertisements.map((advertisement) => (
                  <li className="shadow-sm" key={advertisement.id}>
                    <a href="/#">
                      <span className="avatar">
                        {advertisement.position.jobName[0]}
                      </span>
                      <span className="detail">
                        <span className="title">
                          {advertisement.position.jobName}
                        </span>
                        <span className="position">
                          {advertisement.jobDescription}
                        </span>
                      </span>
                      <span className="location">
                        <FontAwesomeIcon
                          className="mr-1"
                          icon={faMapMarkerAlt}
                        />{" "}
                        {advertisement.city.cityName}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-center">
                <a href="/#" className="component--job-button">
                  <span className="mr-3">Tüm İlanları Gör</span> <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
