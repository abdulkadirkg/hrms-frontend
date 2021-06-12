import React from 'react';
import './Preloader.css';

export default function Preloader() {
    return (
      <div>
        <div class="d-flex justify-content-center my-5">
          <div class="spinner-grow text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
}
