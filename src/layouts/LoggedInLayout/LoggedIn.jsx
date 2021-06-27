import React from "react";
import "./LoggedIn.css";
import { Link } from "react-router-dom";
export default function LoggedIn() {
  return (
    <div>
      <Link to="/profile">
        <button className="font-weight-light border btn btn-light rounded p-1 my-auto">
          <img src="http://res.cloudinary.com/dpsu9nta0/image/upload/v1624743160/ibcz1iuxtmf5j2kqda75.jpg" class="logged-in-profile-picture mr-1 shadow profile-picture" alt="profilePicture"></img>
          <strong className="font-weight-bold">AbdulkadirKG</strong>
        </button>
      </Link>
    </div>
  );
}
