import React from "react";
import "./HRMSCustomModal.css";
import { Formik } from "formik";
export default function HRMSCustomModal({ ...props }) {
  let { title } = { ...props };
  return (
    <div>
      <div data-toggle="modal" data-target="#exampleModalCenter">
        {props.children}
      </div>

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title font-weight-bold" id="exampleModalLongTitle">
                {title}
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">Formik Gelecek</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-danger" data-dismiss="modal">
                Vazgeç
              </button>
              <button type="button" class="btn btn-main text-light">
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
