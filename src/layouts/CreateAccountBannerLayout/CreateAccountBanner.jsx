import "./CreateAccountBanner.css";
import React from "react";
import { Link } from "react-router-dom";

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
              <p>Hemen üye ol, kriterlerini belirle, aradığın işe ulaş. Kariyerin parmaklarının ucunda...</p>
              <blockquote className="blockquote">
                <p className="mb-0 font-italic small font-weight-light">"Sevdiğin işi yaparsan, ömür boyu çalışmış olmazsın."</p>
                <footer className="blockquote-footer text-light">
                  <cite title="Source Title">Çin Atasözü</cite>
                </footer>
              </blockquote>
            </div>
            <div className="col-md-2 my-auto">
              <Link to="/register/candidate">
                <div className="btn btn-light shadow font-weight-bold btn-lg w-100">Üye Ol</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="create-account-banner mt-2 shadow">
          <div className="row">
            <div className="col-md-10">
              <h2>
                <b>Aradığın Liyakati Bul</b>
              </h2>
              <p>Hemen üye ol, kriterlerini belirle, aradığın personele ulaş. İşletmenizin geleceği parmaklarınızın ucunda...</p>
              <blockquote className="blockquote">
                <p className="mb-0 font-italic small font-weight-light">"İyi eleman seç, iyi maaş ver. Çünkü kötü eleman sana pahalıya mâl olur."</p>
                <footer className="blockquote-footer text-light">
                  <cite title="Source Title">Vehbi KOÇ</cite>
                </footer>
              </blockquote>
            </div>
            <div className="col-md-2 my-auto">
              <Link to="/register/employer">
                <div className="btn btn-light shadow font-weight-bold btn-lg w-100">Üye Ol</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
