import React from "react";
import Lastest from "../../pages/LastestPage/Lastest";
import Banner from '../BannerLayout/Banner'
import CreateAccountBanner from "../CreateAccountBannerLayout/CreateAccountBanner";
export default function Dashboard() {
  return (
    <div>
      <Banner/>
      <Lastest/>
      <CreateAccountBanner/>
    </div>
  );
}
