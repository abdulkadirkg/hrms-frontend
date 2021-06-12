import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navi.css";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
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
            <div className="btn btn-block btn-light font-weight-bold my-auto btn-sm border btn-main shadow">
              <FontAwesomeIcon icon={faUser} /> Giriş Yap
            </div>
          </span>
        </div>
      </header>
    </div>
  );
}
