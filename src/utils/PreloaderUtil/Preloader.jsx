import React from 'react';
import './Preloader.css';

export default function Preloader({...props}) {
  const { className } = { ...props };
  console.log(props)
    return (
      <div>
        <div className={className + " d-flex justify-content-center"}>
          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
}
