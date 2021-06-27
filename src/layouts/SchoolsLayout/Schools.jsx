import React from "react";
import "./Schools.css";
export default function Schools({ schools }) {
  console.log(schools);
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="schools-tab" data-toggle="tab" href="#schools" role="tab" aria-controls="schools" aria-selected="true">
            Eğitim
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="add-tab" data-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="false">
            Ekle
          </a>
        </li>
      </ul>
      <div className="tab-content" id="schoolsTabContent">
        <div className="tab-pane fade show active" id="schools" role="tabpanel" aria-labelledby="schools-tab">
          {schools &&
            schools.map((school,index) => {
              return (
                <div key={school.id} className="bg-light my-1 border rounded p-1">
                  <div className="row">
                    <div className="col-md-3 d-flex flex-column">
                      
                      <small className="text-muted font-weight-lighter"><b className="font-weight-bold text-success">#{index + 1}</b> - Okul;</small>
                      <small>{school.schoolName}</small>
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                      <small className="text-muted font-weight-lighter">Bölüm;</small>
                      <small>{school.departmentName}</small>
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                      <small className="text-muted font-weight-lighter">Başlangıç;</small>
                      <small>{new Date(school.startDate).toLocaleDateString()}</small>
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                      <small className="text-muted font-weight-lighter">Bitiş;</small>
                      <small>{new Date(school.endDate).toLocaleDateString()}</small>
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                      <small className="text-muted font-weight-lighter">Ortalama;</small>
                      <small>{school.grade || "0.00"} Ort.</small>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
          Okul Ekle
        </div>
      </div>
    </div>
  );
}
