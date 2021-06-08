import React from "react";
import Lastest from "../pages/Lastest";
import Banner from './Banner'
import CreateAccountBanner from "./CreateAccountBanner";
export default function Dashboard() {
  return (
    <div>
      <Banner/>
      <Lastest/>
      <CreateAccountBanner/>
    </div>
  );
}
