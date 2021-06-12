import './CreateAccountBanner.css'
import React from "react";

export default function CreateAccountBanner() {
  return (
    <div>
      <div className="container p-0">
        <div className="create-account-banner shadow">
          <div className="row">
            <div className="col-md-10">
              <h2>
                <b>Kariyer Yolculuğu</b>
              </h2>
              <p>
                Hemen üye ol, kriterlerini belirle, aradığın işe ulaş. Kariyerin
                parmaklarının ucunda...
              </p>
              <blockquote className="blockquote">
                <p className="mb-0 font-italic small font-weight-light">
                  "Sevdiğin işi yaparsan, ömür boyu çalışmış olmazsın."
                </p>
                <footer className="blockquote-footer text-light">
                  <cite title="Source Title">Çin Atasözü</cite>
                </footer>
              </blockquote>
            </div>
            <div className="col-md-2 my-auto">
              <div className="btn btn-light shadow font-weight-bold btn-lg w-100">
                Üye Ol
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
