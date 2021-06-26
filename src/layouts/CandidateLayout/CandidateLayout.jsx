import React from "react";
import ErrorAlert from "../../utils/ErrorUtil/ErrorAlert";
import "./CandidateLayout.css";

export default function CandidateLayout({ detailedCandidateDto }) {
  let candidate = detailedCandidateDto.candidate;
  let schools = detailedCandidateDto.schools;
  let experiences = detailedCandidateDto.jobExperiences;
  return (
    <div className="container my-4 border-main shadow-sm p-4">
      {candidate ? (
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center mb-3 justify-content-center">
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
          <strong>
            <i className="fas fa-user-graduate"></i> Eğitim Bilgileri;
          </strong>
          <div className="col-12 my-2 border bg-light rounded px-2 py-1">
            <div className="row p-1 text-muted school-row border-0 border font-weight-bold">
              <div className="col-3">Okul</div>
              <div className="col-3">Bölüm</div>
              <div className="col-2">Başlangıç</div>
              <div className="col-2">Bitiş</div>
              <div className="col-2">Ortalama</div>
            </div>
            {schools.map((school) => {
              return (
                <div key={school.id} className="row shadow-sm school-row bg-light rounded p-1">
                  <div className="col-3">{school.schoolName}</div>
                  <div className="col-3 font-weight-bold">{school.departmentName}</div>
                  <div className="col-2">{new Date(school.startDate).toLocaleDateString()}</div>
                  <div className="col-2">{new Date(school.endDate).toLocaleDateString()}</div>
                  <div className="col-2">{(school.grade || "3.40") + " Ort."}</div>
                </div>
              );
            })}
          </div>
          <strong>
            <i className="fas fa-business-time"></i> İş Tecrübeleri;
          </strong>
          <div className="col-12 my-2 border bg-light rounded px-2 py-1">
            <div className="row p-1 text-muted school-row border-0 border font-weight-bold">
              <div className="col-3">İş Yeri</div>
              <div className="col-3">Pozisyon</div>
              <div className="col-3">Başlangıç</div>
              <div className="col-3">Bitiş</div>
            </div>
            {experiences.map((experience) => {
              return (
                <div key={experience.id} className="row shadow-sm school-row bg-light rounded p-1">
                  <div className="col-3">{experience.workplace}</div>
                  <div className="col-3 font-weight-bold">{experience.jobPosition}</div>
                  <div className="col-3">{new Date(experience.startDate).toLocaleDateString()}</div>
                  <div className="col-3">{(experience.endDate && new Date(experience.endDate).toLocaleDateString()) || "Devam Ediyor"}</div>
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
