import React from "react";

export default function Languages({ languages }) {
  console.log(languages);
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="languages-tab" data-toggle="tab" href="#languages" role="tab" aria-controls="languages" aria-selected="true">
            Yabancı Diller
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="add-tab" data-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="false">
            Ekle
          </a>
        </li>
      </ul>
      <div className="tab-content" id="languagesTabContent">
        <div className="tab-pane fade show active" id="languages" role="tabpanel" aria-labelledby="languages-tab">
          {languages &&
            languages.map((language,index) => {
              return (
                <div key={language.id} className="bg-light my-1 border rounded p-1">
                  <div className="row">
                    <div className="col-md-6 d-flex flex-column">
                      <small className="text-muted font-weight-lighter">
                        <b className="font-weight-bold text-success">#{index + 1}</b> - Dil;
                      </small>
                      <small>{language.languageName}</small>
                    </div>
                    <div className="col-md-6 d-flex flex-column">
                      <small className="text-muted font-weight-lighter">Seviye;</small>
                      <small>{language.level}/10</small>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
          Dil Ekle
        </div>
      </div>
    </div>
  );
}
