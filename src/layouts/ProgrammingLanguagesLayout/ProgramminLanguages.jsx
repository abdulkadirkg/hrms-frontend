import React from 'react';
import ErrorAlert from '../../utils/ErrorUtil/ErrorAlert';
import './ProgrammingLanguages.css';
export default function ProgramminLanguages({programmingLanguages}) {
    console.log(programmingLanguages);
    return (
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="programmingLanguages-tab" data-toggle="tab" href="#programmingLanguages" role="tab" aria-controls="programmingLanguages" aria-selected="true">
              Yetenekler
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="add-tab" data-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="false">
              Ekle
            </a>
          </li>
        </ul>
        <div className="tab-content" id="programmingLanguagesTabContent">
          <div className="tab-pane fade show active" id="programmingLanguages" role="tabpanel" aria-labelledby="programmingLanguages-tab">
            {Object.keys(programmingLanguages).length >0
              ? programmingLanguages.map((programmingLanguage,index) => {
                  return (
                    <div key={programmingLanguage.id} className="bg-light my-1 border rounded p-1">
                      <div className="row">
                        <div className="col-md-6 d-flex flex-column">
                          <small className="text-muted font-weight-lighter">
                            <b className="font-weight-bold text-success">#{index + 1}</b> - Yetenek;
                          </small>
                          <small>{programmingLanguage.programmingLanguageName}</small>
                        </div>
                        <div className="col-md-6 d-flex flex-column">
                          <small className="text-muted font-weight-lighter">
                            Seviye;
                          </small>
                          <small>{programmingLanguage.level}/10</small>
                        </div>
                      </div>
                    </div>
                  );
                })
              : <ErrorAlert error="Yetenek Yok"/>}
          </div>
          <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
            Yetenek Ekle
          </div>
        </div>
      </div>
    );
}
