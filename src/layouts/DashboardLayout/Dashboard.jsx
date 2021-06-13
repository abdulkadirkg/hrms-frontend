import React from "react";
import { Route } from "react-router";
import AdvertisementDetailPage from "../../pages/AdvertisementDetailPage/AdvertisementDetailPage";
import HomePage from "../../pages/HomePage/HomePage"
import RegisterEmployerPage from "../../pages/RegisterEmployerPage/RegisterEmployerPage";
export default function Dashboard() {
  return (
    <div>
      
      <Route exact path="/" component={HomePage} />
      <Route exact path="/advertisements" component={HomePage} />
      <Route exact path="/advertisement/:id" component={AdvertisementDetailPage} />
      <Route exact path="/register-employer" component={RegisterEmployerPage}/>
      {/* <Route path="/cart" component={CartDetail} /> */}
      
    </div>
  );
}
