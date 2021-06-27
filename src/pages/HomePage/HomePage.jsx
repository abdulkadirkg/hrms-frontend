import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./HomePage.css";
import Filters from "../../layouts/FiltersLayout/Filters";
import Advertisement from "../../layouts/AdvertisementLayout/Advertisement";
import CreateAccountBanner from "../../layouts/CreateAccountBannerLayout/CreateAccountBanner";
import Banner from "../../layouts/BannerLayout/Banner";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PreloaderUtil from "../../utils/PreloaderUtil/Preloader";
import ErrorAlert from "../../utils/ErrorUtil/ErrorAlert";

export default function Home() {
  // const [advertisements, setAdvertisements] = useState([]);
  // useEffect(() => {
  //   let advertisementService = new AdvertisementService();
  //   advertisementService
  //     .getAdvertisementsByPage(1, 6)
  //     // .getAdvertisementsConfirmedByStaff()
  //     .then((result) => setAdvertisements(result.data.data));
  // }, []);

  const { favoriteItems } = useSelector((state) => state.favorites);
  const { pending, error, advertisements } = useSelector((state) => state.advertisements);
  return (
    <div>
      <Banner />
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-3 d-none d-lg-block">
            <strong>
              <h4 className="font-weight-bold primary-color-text">Filtreler</h4>
            </strong>
            <Filters />
          </div>
          <div className="col-lg-9">
            <strong>
              <h4 className="font-weight-bold primary-color-text">İlanlar</h4>
            </strong>

            <div className="advertisements">
              {pending ? (
              <PreloaderUtil className="mb-5"/>
              ) : error ? <ErrorAlert error={error}/> : (
                <ul className="component--job-items">
                  {advertisements.slice(0,5).map((advertisement) => (
                    <Advertisement key={advertisement.id} advertisement={advertisement} />
                  ))}
                </ul>
              )}

              <div className="d-flex justify-content-center">
                <Link to="/advertisements" className="shadow component--job-button">
                  <span className="mr-3">Tüm İlanları Gör</span> <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <CreateAccountBanner />
        {favoriteItems.length > 0 && (
          <div className="favorites-popup">
            <Link to="/favorites">
              <button className="btn my-auto pb-0 px-1 btn-outline-danger">
                <i className="fa my-auto h2 fa-heart"></i>
                <small className="text-link text-light">{favoriteItems.length}</small>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
