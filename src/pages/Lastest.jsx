import {
  faArrowRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Filters from "../layouts/FiltersLayout/Filters";
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
            <Filters />
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
                        {advertisement.position?.jobName[0]}
                      </span>
                      <span className="detail">
                        <small className="text-muted">
                          <b>{advertisement?.employer?.companyName}</b> -{" "}
                          {advertisement?.employer?.webSite}
                        </small>
                        <span className="title">
                          {advertisement.position?.jobName}
                        </span>
                        <span className="position">
                          {advertisement?.jobDescription}
                        </span>
                        <small className="d-block text-dark font-italic">
                          1 Gün Önce
                        </small>
                      </span>
                      <span className="location">
                        <FontAwesomeIcon
                          className="mr-1"
                          icon={faMapMarkerAlt}
                        />{" "}
                        <span className="d-block">
                          {advertisement.city?.cityName}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-center">
                <a href="/#" className="shadow component--job-button">
                  <span className="mr-3">Tüm İlanları Gör</span>{" "}
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
