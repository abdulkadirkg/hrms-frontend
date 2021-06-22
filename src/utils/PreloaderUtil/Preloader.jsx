import React from 'react';
import './Preloader.css';

export default function Preloader() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div class="spinner-grow spinner-grow-sm" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
}
