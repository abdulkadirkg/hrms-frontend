import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./Lastest.css";
import Filters from "../../layouts/FiltersLayout/Filters";
import AdvertisementService from "../../services/advertisementService";
import Advertisement from "../../layouts/AdvertisementLayout/Advertisement";
import CreateAccountBanner from "../../layouts/CreateAccountBannerLayout/CreateAccountBanner";

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
              <h4 className="font-weight-bold primary-color-text">Filtreler</h4>
            </strong>
            <Filters />
          </div>
          <div className="col-lg-9">
            <strong>
              <h4 className="font-weight-bold primary-color-text">İlanlar</h4>
            </strong>

            <div className="advertisements">
              <ul className="component--job-items">
                {advertisements.map((advertisement) => (
                  <Advertisement
                    key={advertisement.id}
                    advertisement={advertisement}
                  />
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
        <CreateAccountBanner />
      </div>
    </div>
  );
}
