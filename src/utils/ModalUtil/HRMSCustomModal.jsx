import React from "react";
import "./HRMSCustomModal.css";
import { Formik } from "formik";
export default function HRMSCustomModal({ ...props }) {
  let { title, component } = { ...props };
  return (
    <div>
      <div data-toggle="modal" data-target="#exampleModalCenter">
        {props.children}
      </div>

      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title font-weight-bold" id="exampleModalLongTitle">
                {title}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">{component}</div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger" data-dismiss="modal">
                Vazgeç
              </button>
              <button type="button" className="btn btn-main text-light">
                Kaydet
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
