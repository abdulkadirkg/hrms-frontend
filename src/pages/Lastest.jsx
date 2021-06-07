import { faLiraSign, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
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
        <div className="row mt-5">
          <div className="col-3">
            <strong>
              <h4 className="font-weight-bold">Filtreler</h4>
            </strong>
            <div className="border-main shadow-sm p-2">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header p-0" id="headingOne">
                    <h2 className="m-0">
                      <button className="btn btn-sm btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" >
                        Pozisyon
                      </button>
                    </h2>
                  </div>

                  <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample" >
                    <div className="card-body">Filtreler Buraya Gelecek</div>
                  </div>
                  
                </div>
                <div className="card">
                  <div className="card-header p-0" id="headingTwo">
                    <h2 className="m-0">
                      <button className="btn btn-sm btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                        Şehir
                      </button>
                    </h2>
                  </div>

                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" >
                    <div className="card-body">Filtreler Buraya Gelecek</div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <strong>
              <h4 className="font-weight-bold">İlanlar</h4>
            </strong>

            <div className="advertisements">
              {advertisements.map((advertisement) => (
                <div className="advertisement" key={advertisement.id}>
                  <div className="row">
                    <div className="col-10">
                      <span className="d-block">
                        {advertisement.position.jobName}
                      </span>
                      <small>
                        <p className="text-muted font-italic m-0">
                          {advertisement.jobDescription}
                        </p>
                        <span className="btn-outline-secondary btn badge mr-1"><FontAwesomeIcon icon={faUser}/> {advertisement.positionCount}</span>
                        <span className="btn-outline-secondary btn badge mr-1"><FontAwesomeIcon icon={faLiraSign}/> {advertisement.salaryMax}</span>
                        <span className="btn-outline-secondary btn badge mr-1"><FontAwesomeIcon icon={faLiraSign}/> {advertisement.salaryMin}</span>
                      </small>
                    </div>
                    <div className="col-2 my-auto">
                      <button className="btn btn-sm btn-secondary"> <FontAwesomeIcon icon={faMapMarkerAlt} /> {advertisement.city.cityName}</button>
                    </div>
                  </div>
                </div>
              ))}

            </div>



          </div>
        </div>
      </div>
    </div>
  );
}
