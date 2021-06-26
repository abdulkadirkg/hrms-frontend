import React from "react";
import { Route } from "react-router";
import AdvertisementDetailPage from "../../pages/AdvertisementDetailPage/AdvertisementDetailPage";
import HomePage from "../../pages/HomePage/HomePage";
import AddJobAdvertisementPage from "../../pages/LoggedInEmployer_/AddJobAdvertisementPage/AddJobAdvertisementPage";
import ViewCandidateDetailPage from "../../pages/LoggedInEmployer_/ViewCandidateDetailPage/ViewCandidateDetailPage";
import RegisterCandidatePage from "../../pages/RegisterCandidatePage/RegisterCandidatePage";
import RegisterEmployerPage from "../../pages/RegisterEmployerPage/RegisterEmployerPage";
export default function Dashboard() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/advertisements" component={HomePage} />
      <Route exact path="/advertisement/:id" component={AdvertisementDetailPage} />
      <Route exact path="/register/employer" component={RegisterEmployerPage} />
      <Route exact path="/register/candidate" component={RegisterCandidatePage} />
      <Route exact path="/jobadvertisement/add" component={AddJobAdvertisementPage} />
      <Route exact path="/favorites" component={HomePage} />
      <Route exact path="/candidate/:id" component={ViewCandidateDetailPage} />
      {/* <Route component={NotFound}/> */}
      {/* <Route path="/cart" component={CartDetail} /> */}
    </div>
  );
}
