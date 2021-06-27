import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import CandidateService from "../../../services/candidateService";
import { Route, Redirect } from "react-router";

import { Link } from "react-router-dom";
import Schools from "../../../layouts/SchoolsLayout/Schools";
import JobExperiences from "../../../layouts/JobExperiencesLayout/JobExperiences";
import Resume from "../../../layouts/ResumesLayout/Resume";
import Languages from "../../../layouts/LanguagesLayout/Languages";
import ProgramminLanguages from "../../../layouts/ProgrammingLanguagesLayout/ProgramminLanguages";
import Preloader from "../../../utils/PreloaderUtil/Preloader";
export default function ProfilePage() {
  let id = 1;
  const [detailedCandidateDto, setDetailedCandidateDto] = useState({});
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getCandidate(id).then((result) => setDetailedCandidateDto(result.data.data));
  }, []);
  let candidate = detailedCandidateDto.candidate;
  let schools = detailedCandidateDto.schools;
  let experiences = detailedCandidateDto.jobExperiences;
  let resumes = detailedCandidateDto.resumes;
  let languages = detailedCandidateDto.languages;
  let programmingLanguages = detailedCandidateDto.programmingLanguages;
  return (
    <div>
      {candidate ? (
        <div className="container">
          <div className="row my-4">
            <div className="col-3 pr-1 sidebar">
              <div className="border-main shadow-sm m-auto d-flex flex-column justify-content-center align-items-center">
                <img src={candidate?.profilePicture} className="img-thumbnail d-mobile-img mt-4 shadow profile-picture" alt="profilePicture" />
                <h6 className="mb-0 mt-2 d-mobile">
                  {candidate.name + " " + candidate.surname + " "}
                  {!candidate.confirmationByStaff.confirmed && (
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-badge-check fa-w-16">
                      <path fill="#0e90ff" d="M512 256c0-37.7-23.7-69.9-57.1-82.4 14.7-32.4 8.8-71.9-17.9-98.6-26.7-26.7-66.2-32.6-98.6-17.9C325.9 23.7 293.7 0 256 0s-69.9 23.7-82.4 57.1c-32.4-14.7-72-8.8-98.6 17.9-26.7 26.7-32.6 66.2-17.9 98.6C23.7 186.1 0 218.3 0 256s23.7 69.9 57.1 82.4c-14.7 32.4-8.8 72 17.9 98.6 26.6 26.6 66.1 32.7 98.6 17.9 12.5 33.3 44.7 57.1 82.4 57.1s69.9-23.7 82.4-57.1c32.6 14.8 72 8.7 98.6-17.9 26.7-26.7 32.6-66.2 17.9-98.6 33.4-12.5 57.1-44.7 57.1-82.4zm-144.8-44.25L236.16 341.74c-4.31 4.28-11.28 4.25-15.55-.06l-75.72-76.33c-4.28-4.31-4.25-11.28.06-15.56l26.03-25.82c4.31-4.28 11.28-4.25 15.56.06l42.15 42.49 97.2-96.42c4.31-4.28 11.28-4.25 15.55.06l25.82 26.03c4.28 4.32 4.26 11.29-.06 15.56z" className=""></path>
                    </svg>
                  )}
                </h6>
                <small className="text-muted mt-0 d-mobile">
                  <i className="far fa-envelope" /> {candidate.eMail}
                </small>
                <small className="text-muted mt-0 d-mobile">
                  <i className="far fa-calendar-alt" /> {new Date(candidate.birth).toLocaleDateString()}
                </small>
                <span className="text-center mt-2">
                  {/* {candidate.githubAddress && ( */}
                  <a href={candidate.githubAddress} target="_blank">
                    <i className="fab h2 fa-github text-dark mx-1"></i>
                  </a>
                  {/* )} */}
                  {/* {candidate.linkedinAddress && ( */}
                  <a href={candidate.linkedinAddress} target="_blank">
                    <i className="fab h2 primary-color-text fa-linkedin mx-1"></i>
                  </a>
                  {/* )} */}
                </span>
                <hr className="h-100 mt-1 w-100" />
                <div className="list-group w-100">
                  <Link to={"resumes"} type="button" className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center" aria-current="true">
                    <i className="fas fa-file"></i> <span className="d-mobile">Özgeçmişlerim</span>
                  </Link>
                  <Link to={"schools"} type="button" className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center">
                    <i className="fas fa-graduation-cap"></i> <span className="d-mobile">Öğrenim Bilgilerim</span>
                  </Link>
                  <Link to={"experiences"} type="button" className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center">
                    <i className="fas fa-cash-register"></i> <span className="d-mobile">İş Tecrübelerim</span>
                  </Link>
                  <Link to={"languages"} type="button" className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center">
                    <i className="fas fa-flag-usa"></i> <span className="d-mobile">Yabancı Diller</span>
                  </Link>
                  <Link to={"skills"} type="button" className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center">
                    <i className="fas fa-american-sign-language-interpreting"></i> <span className="d-mobile">Yetenekler</span>
                  </Link>
                  <Link to={"settings"} type="button" className="list-group-item list-group-item-action sidebar-menu d-flex justify-content-between px-2 text-center">
                    <i className="fas fa-cog"></i> <span className="d-mobile">Seçenekler</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-9 pl-1">
              <div className="border-main shadow-sm">
                <Redirect exact from="/profile" to="/profile/resumes" />
                <Route render={(props) => <Resume resumes={resumes} {...props} />} path="/profile/resumes" />
                <Route render={(props) => <Schools schools={schools} {...props} />} path="/profile/schools" />
                <Route render={(props) => <JobExperiences experiences={experiences} {...props} />} path="/profile/experiences" />
                <Route render={(props) => <Languages languages={languages} {...props} />} path="/profile/languages" />
                <Route render={(props) => <ProgramminLanguages programmingLanguages={programmingLanguages} {...props} />} path="/profile/skills" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Preloader className="my-5" />
      )}
    </div>
  );
}
