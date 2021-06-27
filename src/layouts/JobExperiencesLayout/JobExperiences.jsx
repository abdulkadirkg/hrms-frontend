import React from "react";

export default function JobExperiences({ experiences }) {
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="experiences-tab" data-toggle="tab" href="#experiences" role="tab" aria-controls="experiences" aria-selected="true">
            İş Tecrübeleri
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="add-tab" data-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="false">
            Ekle
          </a>
        </li>
      </ul>
      <div className="tab-content" id="experiencesTabContent">
        <div className="tab-pane fade show active" id="experiences" role="tabpanel" aria-labelledby="experiences-tab">
          {experiences &&
            experiences.map((experience,index) => {
              return (
                <div key={experience.id} className="bg-light my-1 border rounded p-1">
                  <div className="row">
                    <div className="col-md-3 d-flex flex-column">
                      <small className="text-muted font-weight-lighter">
                        <b className="font-weight-bold text-success">#{index + 1}</b> - İşyeri;
                      </small>
                      <small>{experience.workplace}</small>
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                      <small className="text-muted font-weight-lighter">Pozisyon;</small>
                      <small>{experience.jobPosition}</small>
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                      <small className="text-muted font-weight-lighter">Başlangıç;</small>
                      <small>{new Date(experience.startDate).toLocaleDateString()}</small>
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                      <small className="text-muted font-weight-lighter">Bitiş;</small>
                      <small>{new Date(experience.endDate).toLocaleDateString() && "Devam Ediyor"}</small>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
          İş Tecrübesi Ekle
        </div>
      </div>
    </div>
  );
}
