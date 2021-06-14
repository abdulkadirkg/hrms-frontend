import React from "react";
import "./RegisterCandidate.css";
import { useToasts } from "react-toast-notifications";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CandidateService from "../../services/candidateService";
export default function RegisterCandidate() {
  const { addToast } = useToasts();
  return (
    <div>
      <Formik
        initialValues={{
          birthDate: "",
          eMail: "",
          password: "",
          passwordRepeat: "",
          identifyNumber: "",
          name: "",
          surname: "",
        }}
        validationSchema={Yup.object({
          birthDate: Yup.date().required("Lütfen Doğum Tarihinizi Giriniz."),
          eMail: Yup.string().email("Lütfen Geçerli Bir E-Mail Alanı Giriniz.").required("Lütfen E-Mail Adresinizi Giriniz."),
          identifyNumber: Yup.string().required("Lütfen TC Kimlik Numaranızı Giriniz."),
          name: Yup.string().required("Lütfen Adınızı Giriniz."),
          surname: Yup.string().required("Lütfen Soyadınızı Giriniz"),
          password: Yup.string().required("Lütfen Bir Şifre Belirleyiniz."),
          passwordRepeat: Yup.string()
            .oneOf([Yup.ref("password"), null], "Şifreler Eşleşmiyor.")
            .required("Lütfen Şifrenizi Doğrulayın."),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let candidateService = new CandidateService();
          candidateService.registerCandidate(values).then((result) => {
            addToast(result.data.message, { appearance: result.data.success ? "success" : "error", autoDismiss: true });
          });
        }}
      >
        {({ values, errors, handleChange, handleSubmit, touched, handleReset, handleBlur, dirty, isSubmitting }) => (
          <form className="register-candidate-form p-4" onSubmit={handleSubmit}>
            <h5 className="font-weight-bold text-center">Kayıt Ol</h5>
            <small className="d-block text-center text-muted">Kayıt Ol, Aradığın İşe Anında Ulaş</small>
            <hr />
            <label htmlFor="name">İsim;</label>
            <input id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} required type="text" />
            {errors.name && touched.name && <small className="d-block text-danger">{errors.name}</small>}
            <label htmlFor="surname">Soyisim;</label>
            <input id="surname" value={values.surname} onChange={handleChange} onBlur={handleBlur} required type="text" />
            {errors.surname && touched.surname && <small className="d-block text-danger">{errors.surname}</small>}
            <label htmlFor="eMail">E-Mail;</label>
            <input id="eMail" value={values.eMail} onChange={handleChange} onBlur={handleBlur} required type="email" />
            {errors.eMail && touched.eMail && <small className="d-block text-danger">{errors.eMail}</small>}
            <label htmlFor="password">Şifre;</label>
            <input id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} required type="password" />
            {errors.password && touched.password && <small className="d-block text-danger">{errors.password}</small>}
            <label htmlFor="passwordRepeat">Şifre Tekrarı;</label>
            <input id="passwordRepeat" value={values.passwordRepeat} onChange={handleChange} onBlur={handleBlur} required type="password" />
            {errors.passwordRepeat && touched.passwordRepeat && <small className="d-block text-danger">{errors.passwordRepeat}</small>}
            <label htmlFor="identifyNumber">TC Kimlik No;</label>
            <input id="identifyNumber" value={values.identifyNumber} onChange={handleChange} onBlur={handleBlur} required type="identifyNumber" />
            {errors.identifyNumber && touched.identifyNumber && <small className="d-block text-danger">{errors.identifyNumber}</small>}
            <label htmlFor="birthDate">Doğum Tarihi;</label>
            <input id="birthDate" value={values.birthDate} onChange={handleChange} onBlur={handleBlur} type="date" />
            {errors.birthDate && touched.birthDate && <small className="d-block text-danger">{errors.birthDate}</small>}
            <button type="submit" disabled={!dirty || isSubmitting} className="btn btn-main btn-block text-light">
              <FontAwesomeIcon icon={faCheckCircle} /> Kayıt Ol
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
