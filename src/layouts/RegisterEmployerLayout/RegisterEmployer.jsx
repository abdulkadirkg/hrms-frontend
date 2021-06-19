import React from "react";
import { useToasts } from "react-toast-notifications";
import "./RegisterEmployer.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import EmployerService from "../../services/employerService";
export default function RegisterEmployer() {
  const { addToast } = useToasts();
  return (
    <div>
      <Formik
        initialValues={{
          companyName: "",
          eMail: "",
          password: "",
          passwordRepeat: "",
          phone: "",
          webSite: "",
        }}
        validationSchema={Yup.object({
          companyName: Yup.string().required("Şirket İsmi Boş Olamaz."),
          eMail: Yup.string().email("Lütfen Geçerli Bir E-Mail Alanı Giriniz.").required("E-Mail Alanı Boş Bırakılamaz."),
          password: Yup.string().required("Lütfen Bir Şifre Belirleyiniz."),
          passwordRepeat: Yup.string()
            .oneOf([Yup.ref("password"), null], "Şifreler Eşleşmiyor.")
            .required("Lütfen Şifrenizi Doğrulayın."),
          phone: Yup.string()
            .matches(/^5(0[5-7]|[3-5]\d) ?\d{3} ?\d{4}$/, { message: "Lütfen Geçerli Bir Telefon Numarası Giriniz. (5XX XXX XX XX)", excludeEmptyString: false })
            .required("Lütfen Telefon Numaranızı Giriniz."),
          webSite: Yup.string(),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let employerService = new EmployerService();
          employerService.registerEmployer(values).then((result) => {
            addToast(result.data.message, { appearance: result.data.success ? "success" : "error", autoDismiss: true });
            // console.log(result.data);
          });
        }}
      >
        {({ values, errors, handleChange, handleSubmit, touched, handleReset, handleBlur, dirty, isSubmitting }) => (
          <form className="register-employer-form p-4" onSubmit={handleSubmit}>
            <h5 className="font-weight-bold text-center">Kayıt Ol</h5>
            <small className="d-block text-center text-muted">İşveren</small>
            <hr />
            <label htmlFor="companyName">Şirket İsmi;</label>
            <input id="companyName" value={values.name} onChange={handleChange} onBlur={handleBlur} required type="text" />
            {errors.companyName && touched.companyName && <small className="d-block text-danger">{errors.companyName}</small>}
            <label htmlFor="eMail">E-Mail;</label>
            <input id="eMail" value={values.eMail} onChange={handleChange} onBlur={handleBlur} required type="email" />
            {errors.eMail && touched.eMail && <small className="d-block text-danger">{errors.eMail}</small>}
            <label htmlFor="password">Şifre;</label>
            <input id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} required type="password" />
            {errors.password && touched.password && <small className="d-block text-danger">{errors.password}</small>}
            <label htmlFor="passwordRepeat">Şifre Tekrarı;</label>
            <input id="passwordRepeat" value={values.passwordRepeat} onChange={handleChange} onBlur={handleBlur} required type="password" />
            {errors.passwordRepeat && touched.passwordRepeat && <small className="d-block text-danger">{errors.passwordRepeat}</small>}
            <label htmlFor="phone">Telefon;</label>
            <input id="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} required type="phone" />
            {errors.phone && touched.phone && <small className="d-block text-danger">{errors.phone}</small>}
            <label htmlFor="webSite">Web Site;</label>
            <input id="webSite" value={values.webSite} onChange={handleChange} onBlur={handleBlur} type="text" />
            {errors.webSite && touched.webSite && <small className="d-block text-danger">{errors.webSite}</small>}
            <button type="submit" disabled={!dirty || isSubmitting} className="btn btn-main btn-block text-light">
              <FontAwesomeIcon icon={faCheckCircle} /> Kayıt Ol
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
