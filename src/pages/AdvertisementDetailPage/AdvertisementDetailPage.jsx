import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AdvertisementDetailPage.css";
import AdvertisementDetailBox from "../../layouts/AdvertisementDetailLayout/AdvertisementDetailBox";
import AdvertisementService from "../../services/advertisementService";
import Preloader from "../../utils/PreloaderUtil/Preloader";

export default function AdvertisementDetailPage() {
  let { id } = useParams();
  const [advertisement, setAdvertisement] = useState({});
  useEffect(() => {
    let advertisementService = new AdvertisementService();
    advertisementService.getAdvertisment(id).then((result) => setAdvertisement(result.data.data));
  }, []);
  return (
    <div>
      {Object.keys(advertisement).length > 0 ? (
        <AdvertisementDetailBox advertisement={advertisement} />
      ) : (
        <Preloader/> 
      )}
    </div>
  );
}
