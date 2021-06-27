import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import "./UpdateResume.css";
import HRMSCustomModal from "../../utils/ModalUtil/HRMSCustomModal";
import { Formik } from "formik";
import * as Yup from "yup";
import HRMSCustomField from "../../utils/CustomFormControls/HRMSCustomField";
import ResumeService from "../../services/resumeService";

export default function UpdateResume({ data }) {
  const { addToast } = useToasts();
  const [_data, setData] = useState(data);
  const initialValues = data;
  const schema = Yup.object({
    resumeText: Yup.string().required("Lütfen Metin Giriniz"),
    isActive: Yup.bool().oneOf([true, false], "Accept Terms & Conditions is required"),
  });
  useEffect(() => {
    setData(_data);
  }, [_data]);
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let resumeService = new ResumeService();
          resumeService.updateResume(values).then((result) => {
            addToast(result.data.message, { appearance: result.data.success ? "success" : "error", autoDismiss: true });
            data = values;
          });
        }}
        handleChange={(change) => console.log(change)}
      >
        {({ handleSubmit, dirty, setFieldValue, isSubmitting }) => (
          <form className="update-resume-form p-4" onSubmit={handleSubmit}>
            <HRMSCustomField className="m-0" as="textarea" rows="4" label="Özgeçmiş;" name="resumeText" placeholder="Açıklama" />
            <label className="checkbox-input">
              <input type="checkbox" defaultChecked={initialValues.isActive} name="isActive" />
              <span onClick={() => setFieldValue("isActive", !initialValues.isActive)} className="checkbox"></span>
            </label>
            <button type="submit" disabled={!dirty} className="btn btn-main mt-3 btn-block text-light">
              <i className="fa fa-check-circle" /> Kaydet
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
