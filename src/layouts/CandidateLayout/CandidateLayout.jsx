import React from "react";
import ErrorAlert from "../../utils/ErrorUtil/ErrorAlert";
import "./CandidateLayout.css";

export default function CandidateLayout({ detailedCandidateDto }) {
  let candidate = detailedCandidateDto.candidate;
  let schools = detailedCandidateDto.schools;
  return (
    <div className="container my-4 border-main shadow-sm p-4">
      {candidate ? (
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <img src={candidate?.profilePicture} className="img-thumbnail shadow profile-picture" alt="profilePicture" />
            <h3 className="font-weight-bold mb-0">
              {candidate.name + " " + candidate.surname + " "}
              {!candidate.confirmationByStaff.confirmed && (
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-badge-check fa-w-16">
                  <path fill="#0e90ff" d="M512 256c0-37.7-23.7-69.9-57.1-82.4 14.7-32.4 8.8-71.9-17.9-98.6-26.7-26.7-66.2-32.6-98.6-17.9C325.9 23.7 293.7 0 256 0s-69.9 23.7-82.4 57.1c-32.4-14.7-72-8.8-98.6 17.9-26.7 26.7-32.6 66.2-17.9 98.6C23.7 186.1 0 218.3 0 256s23.7 69.9 57.1 82.4c-14.7 32.4-8.8 72 17.9 98.6 26.6 26.6 66.1 32.7 98.6 17.9 12.5 33.3 44.7 57.1 82.4 57.1s69.9-23.7 82.4-57.1c32.6 14.8 72 8.7 98.6-17.9 26.7-26.7 32.6-66.2 17.9-98.6 33.4-12.5 57.1-44.7 57.1-82.4zm-144.8-44.25L236.16 341.74c-4.31 4.28-11.28 4.25-15.55-.06l-75.72-76.33c-4.28-4.31-4.25-11.28.06-15.56l26.03-25.82c4.31-4.28 11.28-4.25 15.56.06l42.15 42.49 97.2-96.42c4.31-4.28 11.28-4.25 15.55.06l25.82 26.03c4.28 4.32 4.26 11.29-.06 15.56z" className=""></path>
                </svg>
              )}
            </h3>
            <small className="text-muted mt-0">
              <i className="far fa-envelope" /> {candidate.eMail}
            </small>
            <small className="text-muted mt-0">
              <i className="far fa-calendar-alt" /> {new Date(candidate.birth).toLocaleDateString()}
            </small>
            <span>
              {/* {candidate.githubAddress && ( */}
              <a href={candidate.githubAddress || "https://github.com/abdulkadirkg"} target="_blank">
                <i className="fab h2 fa-github text-dark mr-1"></i>
              </a>
              {/* )} */}
              {/* {candidate.linkedinAddress && ( */}
              <a href={candidate.linkedinAddress || "https://www.linkedin.com/in/abdulkadirkaradag"} target="_blank">
                <i className="fab h2 primary-color-text fa-linkedin ml-1"></i>
              </a>
              {/* )} */}
            </span>
          </div>
          <div className="col-12 border bg-light rounded px-2 py-1">
            <strong>Eğitim Bilgileri;</strong>
            {schools.map((school) => {
              return (
                <div key={school.id} className="row shadow-sm school-row bg-light rounded p-1">
                  <div className="col-3">{school.schoolName}</div>
                  <div className="col-3">{school.departmentName}</div>
                  <div className="col-2">{new Date(school.startDate).toLocaleDateString()}</div>
                  <div className="col-2">{new Date(school.endDate).toLocaleDateString()}</div>
                  <div className="col-2">{(school.grade||"3.40") + " Ort."}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <ErrorAlert error="Kullanıcı Bulunamadı" />
      )}
    </div>
  );
}
