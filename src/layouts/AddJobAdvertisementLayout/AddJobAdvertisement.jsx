import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CityService from "../../services/cityService";
import PositionService from "../../services/positionService";
import JobTypeService from "../../services/jobTypeService";
import AdvertisementService from "../../services/advertisementService";
import { Select } from "semantic-ui-react";
export default function AddJobAdvertisement() {
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
  }, []);

  const [jobTypes, setJobTypes] = useState([]);
  useEffect(() => {
    let jobTypeService = new JobTypeService();
    jobTypeService.getJobTypes().then((result) => {
      setJobTypes(result.data.data);
    });
  }, []);
  const { addToast } = useToasts();
  return (
    <div>
      <Formik
        initialValues={{
          city: {},
          position: {},
          jobType: {},
          jobDescription: "",
          positionCount: 1,
          salaryMax: 0,
          salaryMin: 0,
          applicationDeadline: new Date().getDate() + 15
        }}
        validationSchema={Yup.object({
          city: Yup.string().required("Lütfen Şehir Seçiniz"),
          // position: Yup.object().required("Lütfen Pozisyon Seçiniz"),
          // jobType: Yup.object().required("Lütfen İş Türü Seçiniz"),
          jobDescription: Yup.string().required("Lütfen Açıklama Giriniz"),
          positionCount: Yup.number().required("Lütfen Pozisyon Sayısını Giriniz"),
          salaryMax: Yup.number(),
          salaryMin: Yup.number(),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          let advertisementService = new AdvertisementService();
          values.city = JSON.parse(values.city);
          values.position = JSON.parse(values.position);
          values.jobType = JSON.parse(values.jobType);
          advertisementService.saveAdvertisement(values).then((result) => {
            addToast(result.data.message, { appearance: result.data.success ? "success" : "error", autoDismiss: true });
          });
        }}
        handleChange={(change) => console.log(change)}
      >
        {({ values, errors, handleChange, handleSubmit, setFieldValue, touched, handleReset, handleBlur, dirty, isSubmitting }) => (
          <form className="add-job-advertisement-form p-4" onSubmit={handleSubmit}>
            <h5 className="font-weight-bold text-center">İlan Oluştur</h5>
            <small className="d-block text-center text-muted">İlan Oluştur, Aradığın Liyakate Ulaş...</small>
            <hr />
            <div className="row mb-2">
              <div className="col-md-4">
                <select id="city" value={values.city} onChange={handleChange} onBlur={handleBlur} required className="mt-1">
                  <option>Şehir Seçiniz</option>
                  {cities.map((city) => (
                    <option key={city.id} value={JSON.stringify(city)}>
                      {city.cityName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <select id="position" value={values.position} onChange={handleChange} onBlur={handleBlur} required className="mt-1">
                  <option>Pozisyon Seçiniz</option>
                  {positions.map((position) => (
                    <option key={position.id} value={JSON.stringify(position)}>
                      {position.jobName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <select id="jobType" value={values.jobType} onChange={handleChange} onBlur={handleBlur} required className="mt-1">
                  <option>İş Tipini Seçiniz</option>
                  {jobTypes.map((jobType) => (
                    <option key={jobType.id} value={JSON.stringify(jobType)}>
                      {jobType.jobType}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <label htmlFor="jobDescription">Açıklama;</label>
            <textarea id="jobDescription" rows="5" value={values.jobDescription} onChange={handleChange} onBlur={handleBlur} required type="text" />
            {errors.jobDescription && touched.jobDescription && <small className="d-block text-danger">{errors.jobDescription}</small>}

            <div className="row">
              <div className="col-md-4">
                <label htmlFor="positionCount">Açık Pozisyon Adedi;</label>
                <input id="positionCount" value={values.positionCount} onChange={handleChange} onBlur={handleBlur} required type="text" />
                {errors.positionCount && touched.positionCount && <small className="d-block text-danger">{errors.positionCount}</small>}
              </div>
              <div className="col-md-4">
                <label htmlFor="salaryMin">Minimum Ücret;</label>
                <input id="salaryMin" value={values.salaryMin} onChange={handleChange} onBlur={handleBlur} required type="text" />
                {errors.salaryMin && touched.salaryMin && <small className="d-block text-danger">{errors.salaryMin}</small>}
              </div>
              <div className="col-md-4">
                <label htmlFor="salaryMax">Maksimum Ücret;</label>
                <input id="salaryMax" value={values.salaryMax} onChange={handleChange} onBlur={handleBlur} required type="text" />
                {errors.salaryMax && touched.salaryMax && <small className="d-block text-danger">{errors.salaryMax}</small>}
              </div>
            </div>
            <button type="submit" disabled={!dirty || isSubmitting} className="btn btn-main mt-3 btn-block text-light">
              <FontAwesomeIcon icon={faCheckCircle} /> Kaydet
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
