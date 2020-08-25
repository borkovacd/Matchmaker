import React from "react";
import strings from "../../../localization";
import ErrorViewer from "../../ErrorViewer";
import { Link } from "react-router-dom";

const RegistrationSecondStepForm = ({
  errors,
  data,
  onSubmit,
  file,
  onFileChanged,
}) => (
  <form id="register-form-2" className="lrp-form-container padding-2">
    <div className="lrp-form-title">{strings.registrationForm2.title}</div>
    <div className="profile-data">
      <div className="form-row mb-5">
        <div className="column">
          <div className="label">
            <ErrorViewer data={data} errors={errors} type={"profileImage"} />
          </div>
          {file && <div className="canvas-container"></div>}

          {!file && (
            <div className="photo-placeholder">
              <div className="upload-placeholder"></div>
            </div>
          )}

          <div className="choose-image">
            <input
              type="file"
              name={"file"}
              className="file-input"
              onChange={onFileChanged}
            />
            <p className="label">{strings.registrationForm2.add}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="form-row mb-5">
      <div className="column">
        <div className="label">
          <label>{strings.registrationForm2.description}</label>
        </div>
      </div>
    </div>

    <div className="form-row">
      <div className="column center">
        <a
          onClick={(event) => onSubmit(event)}
          className="btn lrp-btn btn-red uppercase"
        >
          {strings.registrationForm2.upload}
        </a>
      </div>
    </div>

    <div className="form-row">
      <div className="column not-a-member center">
        <Link to={"/"}>{strings.registrationForm2.skip}</Link>
      </div>
    </div>
  </form>
);

export default RegistrationSecondStepForm;
