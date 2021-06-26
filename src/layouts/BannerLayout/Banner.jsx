import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useSelector } from "react-redux";
import PreloaderUtil from "../../utils/PreloaderUtil/Preloader";
import { Formik } from "formik";
import * as Yup from "yup";
import HRMSCustomField from "../../utils/CustomFormControls/HRMSCustomField";

import ErrorAlert from "../../utils/ErrorUtil/ErrorAlert";

export default function Banner() {
  const { cities, error, pending } = useSelector((state) => state.allCities);
  const { jobTypes, errorJobTypes, pendingJobTypes } = useSelector((state) => state.jobTypes);
  const { positions, errorPositions, pendingPositions } = useSelector((state) => state.positions);
  const initialValues = {
    city: {},
    position: "",
    jobType: {},
  };
  const schema = Yup.object({
    // city: Yup.string().required("Lütfen Şehir Seçiniz"),
    // position: Yup.string().required("Lütfen Pozisyon Seçiniz"),
    // jobType: Yup.string().required("Lütfen İş Türü Seçiniz"),
    position: Yup.string().required("Lütfen Açıklama Giriniz"),
  });
  return (
    <div>
      <section className="banner-section">
        <div className="container border-main shadow-lg text-dark">
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              // values.city = JSON.parse(values.city);
              // values.position = JSON.parse(values.position);
              // values.jobType = JSON.parse(values.jobType);
            }}
            handleChange={(change) => console.log(change)}
          >
            {({ values, handleSubmit, handleChange, setFieldValue, dirty, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col-xl-5">
                    <HRMSCustomField as="input" value={values.position} name="position" placeholder="Pozisyon Ara" className="form-control-sm font-weight-light" />
                    <div className="mb-1 d-block">
                      {pendingPositions ? (
                        <PreloaderUtil />
                      ) : errorPositions ? (
                        <ErrorAlert error={error} />
                      ) : (
                        positions.slice(0, 3).map((position) => (
                          <small onClick={() => setFieldValue("position", position.jobName)} className="btn btn-sm btn-light mt-1 border border-none city-badge" key={position.id} value={position}>
                            <i className="fa fa-desktop" /> {position.jobName}
                          </small>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <HRMSCustomField as="select" name="jobType" className="form-control-sm font-weight-light">
                      <option value="" disabled hidden>
                        İş Tipi Seçiniz
                      </option>
                      {jobTypes.map((jobType) => (
                        <option key={jobType.id} value={JSON.stringify(jobType)}>
                          {jobType.jobType}
                        </option>
                      ))}
                    </HRMSCustomField>

                    <div className="mb-1">
                      {pendingJobTypes ? (
                        <PreloaderUtil />
                      ) : errorJobTypes ? (
                        <ErrorAlert error={error} />
                      ) : (
                        jobTypes.slice(0, 3).map((jobType) => (
                          <small onClick={() => setFieldValue("jobType", jobType)} className="btn btn-sm btn-light mt-1 border border-none city-badge" key={jobType.id} value={jobType}>
                            <i className="far fa-clock" /> {jobType.jobType}
                          </small>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <HRMSCustomField as="select" value={("city", values.city)} name="city" className="form-control-sm font-weight-light">
                      <option value="" disabled hidden>
                        Şehir Seçiniz
                      </option>
                      {cities.map((city) => (
                        <option key={city.id} value={JSON.stringify(city)}>
                          {city.cityName}
                        </option>
                      ))}
                    </HRMSCustomField>
                    <div className="mb-1">
                      {pending ? (
                        <PreloaderUtil />
                      ) : error ? (
                        <ErrorAlert error={error} />
                      ) : (
                        cities.slice(0, 3).map((city) => (
                          <small onClick={() => {setFieldValue("city", city)}} className="btn btn-sm btn-light mt-1 border border-none city-badge" key={city.id} value={city}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {city.cityName}
                          </small>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="col-xl-1 h-100">
                    <button type="submit" disabled={!values.position} className="btn btn-block btn-light font-weight-bold my-auto btn-sm border btn-main shadow">
                      <FontAwesomeIcon icon={faSearch} /> Ara
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
}
