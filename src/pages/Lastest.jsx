import {
  faArrowRight,
  faFilter,
  faLiraSign,
  faLocationArrow,
  faMapMarkerAlt,
  faUser,
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
            <aside class="component--job-filter shadow-sm">
              <form action="">
                <div class="search mb-3">
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
                <ul class="checkbox-list">
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span class="checkbox"></span>
                      <span class="text">Tümü</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span class="checkbox"></span>
                      <span class="text">Tam Zamanlı</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span class="checkbox"></span>
                      <span class="text">Yarı Zamanlı</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" checked />
                      <span class="checkbox"></span>
                      <span class="text">Freelance</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span class="checkbox"></span>
                      <span class="text">Stajyer</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span class="checkbox"></span>
                      <span class="text">Remote</span>
                    </label>
                  </li>
                </ul>
                <hr />
                <h5 className="font-weight-bold">
                  <FontAwesomeIcon icon={faLocationArrow} /> Konum
                </h5>
                <ul class="filter-form">
                  <li>
                    <label for="country">Ülke/Şehir</label>
                    <select name="" id="country">
                      <option value="">Türkiye</option>
                      <option value="">Türkiye</option>
                      <option value="">Türkiye</option>
                      <option value="">Türkiye</option>
                    </select>
                  </li>
                  <li>
                    <label for="city">City</label>
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
              <ul class="component--job-items">
                {advertisements.map((advertisement) => (
                  <li className="shadow-sm">
                    <a href="#">
                      <span class="avatar">
                        {advertisement.position.jobName[0]}
                      </span>
                      <span class="detail">
                        <span class="title">
                          {advertisement.position.jobName}
                        </span>
                        <span class="position">
                          {advertisement.jobDescription}
                        </span>
                      </span>
                      <span class="location">
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
                <a href="#" class="component--job-button">
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
