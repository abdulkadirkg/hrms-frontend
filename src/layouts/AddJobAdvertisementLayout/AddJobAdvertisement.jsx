import { useToasts } from "react-toast-notifications";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import AdvertisementService from "../../services/advertisementService";
import { useSelector } from "react-redux";
import HRMSCustomField from "../../utils/CustomFormControls/HRMSCustomField";
export default function AddJobAdvertisement() {
  const { cities, error, pending } = useSelector((state) => state.allCities);
  const { jobTypes, errorJobTypes, pendingJobTypes } = useSelector((state) => state.jobTypes);
  const { positions, errorPositions, pendingPositions } = useSelector((state) => state.positions);
  const { addToast } = useToasts();
  const initialValues = {
    city: "",
    position: "",
    jobType: "",
    jobDescription: "",
    positionCount: 1,
    salaryMax: 0,
    salaryMin: 0,
    applicationDeadline: new Date(),
  };
  const schema = Yup.object({
    city: Yup.string().required("Lütfen Şehir Seçiniz"),
    position: Yup.string().required("Lütfen Pozisyon Seçiniz"),
    jobType: Yup.string().required("Lütfen İş Türü Seçiniz"),
    jobDescription: Yup.string().required("Lütfen Açıklama Giriniz"),
    positionCount: Yup.number().required("Lütfen Pozisyon Sayısını Giriniz"),
    salaryMax: Yup.number(),
    salaryMin: Yup.number(),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          let advertisementService = new AdvertisementService();
          values.city = JSON.parse(values.city);
          values.position = JSON.parse(values.position);
          values.jobType = JSON.parse(values.jobType);
          // advertisementService.saveAdvertisement(values).then((result) => {
          //   addToast(result.data.message, { appearance: result.data.success ? "success" : "error", autoDismiss: true });
          // });
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
                <HRMSCustomField as="select" name="city">
                  <option value="" disabled hidden>
                    Şehir Seçiniz
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={JSON.stringify(city)}>
                      {city.cityName}
                    </option>
                  ))}
                </HRMSCustomField>
              </div>
              <div className="col-md-4">
                <HRMSCustomField as="select" name="position">
                  <option value="" disabled hidden>
                    Pozisyon Seçiniz
                  </option>
                  {positions.map((position) => (
                    <option key={position.id} value={JSON.stringify(position)}>
                      {position.jobName}
                    </option>
                  ))}
                </HRMSCustomField>
              </div>
              <div className="col-md-4">
                <HRMSCustomField as="select" name="jobType">
                <option value="" disabled hidden>
                  İş Türü Seçiniz
                </option>
                  {jobTypes.map((jobType) => (
                    <option key={jobType.id} value={JSON.stringify(jobType)}>
                      {jobType.jobType}
                    </option>
                  ))}
                </HRMSCustomField>
              </div>
            </div>
            <HRMSCustomField as="textarea" rows="4" label="Açıklama;" name="jobDescription" placeholder="Açıklama" />
            <div className="row">
              <div className="col-md-4">
                <HRMSCustomField as="input" label="Açık Pozisyon Adedi;" name="positionCount" placeholder="0" />
              </div>
              <div className="col-md-4">
                <HRMSCustomField as="input" label="Minimum Ücret;" name="salaryMin" />
              </div>
              <div className="col-md-4">
                <HRMSCustomField as="input" label="Maksimum Ücret;" name="salaryMax" />
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
