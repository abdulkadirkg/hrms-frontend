import React from "react";
import './AddJobAdvertisementPage.css';
import AddJobAdvertisement from "../../../layouts/AddJobAdvertisementLayout/AddJobAdvertisement";
export default function AddJobAdvertisementPage() {
  return (
    <div>
      <div className="container">
        <div className="border-main my-5 shadow">
            <AddJobAdvertisement/>
        </div>
      </div>
    </div>
  );
}
