import React from 'react';
import './Preloader.css';

export default function Preloader() {
    return (
      <div>
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
}
