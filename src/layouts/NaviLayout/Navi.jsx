import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navi.css';

export default function Navi() {
  return (
    <div>
      <header className="shadow-lg">
        <div className="d-flex py-4 justify-content-between container">
          <span className="h4 my-auto w-75 text-wrap">
            <p className="my-auto">
              <b>H</b>uman <b>R</b>esources <b>M</b>anagement <b>S</b>ystem
            </p>
          </span>
          <span className="my-auto">
            <div className="btn btn-block btn-light font-weight-bold my-auto btn-sm border btn-main shadow"><FontAwesomeIcon icon={faUser}/> Giriş Yap</div>
          </span>
        </div>
      </header>
    </div>
  );
}
