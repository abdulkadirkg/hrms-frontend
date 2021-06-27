import React, { useEffect, useState } from "react";
import "./Resume.css";
import HRMSCustomModal from "../../utils/ModalUtil/HRMSCustomModal";
import UpdateResume from "../UpdateResumeLayout/UpdateResume";
export default function Resume({ resumes }) {
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="resumes-tab" data-toggle="tab" href="#resumes" role="tab" aria-controls="resumes" aria-selected="true">
            Özgeçmişler
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="add-tab" data-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="false">
            Ekle
          </a>
        </li>
      </ul>
      <div className="tab-content" id="resumesTabContent">
        <div className="tab-pane fade show active" id="resumes" role="tabpanel" aria-labelledby="resumes-tab">
          {resumes &&
            resumes.map((resume, index) => {
              return (
                <HRMSCustomModal key={resume.id} title="Özgeçmişi Güncelle" index={index} component={<UpdateResume data={resume} />}>
                  <div className="bg-light my-1 cursor-pointer border rounded p-1">
                    <div className="row">
                      <div className="col-md-12 d-flex flex-column">
                        <small className="text-muted font-weight-lighter">
                          <b className="font-weight-bold text-success">#{index + 1}</b> - Özgeçmiş;
                        </small>
                        <small>{resume.resumeText}</small>
                      </div>
                    </div>
                  </div>
                </HRMSCustomModal>
              );
            })}
        </div>
        <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
          Özgeçmiş Ekle
        </div>
      </div>
    </div>
  );
}
