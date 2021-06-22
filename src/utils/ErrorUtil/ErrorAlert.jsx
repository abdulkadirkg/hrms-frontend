import React from "react";

export default function ErrorAlert({error}) {
  return (
    <div>
      <div className="alert text-center alert-danger" role="alert">
        {error}
      </div>
    </div>
  );
}
