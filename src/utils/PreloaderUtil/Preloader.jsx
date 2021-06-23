import React from 'react';
import './Preloader.css';

export default function Preloader() {
    return (
      <div>
        <div className="d-flexjustify-content-center">
          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
}
