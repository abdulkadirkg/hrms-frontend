import React from "react";
import { Route } from "react-router";
import AdvertisementDetail from "../../pages/AdvertisementDetailPage/AdvertisementDetail";
import Lastest from "../../pages/LastestPage/Lastest";
import Banner from '../BannerLayout/Banner'
export default function Dashboard() {
  return (
    <div>
      <Banner />
      <Route exact path="/" component={Lastest} />
      <Route exact path="/advertisements" component={Lastest} />
      <Route path="/advertisement/:id" component={AdvertisementDetail} />
      {/* <Route path="/cart" component={CartDetail} /> */}
      {/* <Lastest /> */}
      
    </div>
  );
}
