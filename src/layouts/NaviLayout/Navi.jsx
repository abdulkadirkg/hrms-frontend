import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navi.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free"

export default function Navi() {
  return (
    <div>
      <div className="engin-demirog alert my-auto border-0 rounded-0 p-1 text-center alert-dismissible small fade show alert-dark bg-primary text-light" role="alert">
        <b>Engin Hocam</b> Mentorluk İstiyoruz!!! 🙏🙃
        <button type="button " className="p-0 mr-2 close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <header className="shadow-lg">
        <div className="d-flex py-4 justify-content-between logo container">
          <span className="h4 my-auto w-75 text-wrap">
            <p className="my-auto">
              <Link className="text-dark" to="/">
                <b>H</b>uman <b>R</b>esources <b>M</b>anagement <b>S</b>ystem
              </Link>
            </p>
          </span>
          <span className="my-auto">
            <button className="btn btn-block btn-light font-weight-bold my-auto btn-sm border btn-main shadow">
              <FontAwesomeIcon icon={faUser} /> Giriş Yap
            </button>
          </span>
        </div>
      </header>
    </div>
  );
}
