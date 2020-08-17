import React from "react";
import strings from "../../../localization";
import ErrorViewer from "../../ErrorViewer";
import { Link } from "react-router-dom";
//import AvatarEditor from "react-avatar-editor";

const RegistrationSecondStepForm = ({
  onChange,
  errors,
  data,
  onSubmit,
  file,
  onFileChanged,
}) => (
  <form id="register-form-2" className="lrp-form-container">
    <div className="lrp-form-title">{strings.registrationForm2.title}</div>
    <div className="form-row mb-5">
      <div className="column"></div>
    </div>
    <div className="profile-data">
      <div className="form-row">
        <div className="column">
          <div className="label-container">
            <label htmlFor="profileImage">
              {strings.registrationForm2.add}
            </label>
            <ErrorViewer data={data} errors={errors} type={"profileImage"} />
          </div>

          {/*file && (
            <div className="canvas-container">
              <AvatarEditor image={file} color={[3, 24, 86, 0.9]} border={5} />
            </div>
          )*/}

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
            <p>{strings.registrationForm.uploadPhoto}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="form-row mb-5">
      <div className="column">
        <div className="label center">
          <label>{strings.registrationForm2.add}</label>
        </div>
      </div>
    </div>
    <div className="form-row mb-5">
      <div className="column">
        <div className="label ">
          <label>{strings.registrationForm2.description}</label>
        </div>
      </div>
    </div>

    <div className="form-row">
      <div className="column controls">
        <a
          onClick={(event) => onSubmit(event)}
          className="btn lrp-btn btn-red uppercase"
        >
          {strings.registrationForm2.upload}
        </a>
      </div>
    </div>

    <div className="form-row center">
      <div className="column not-a-member center">
        <Link to={"/registration"}>{strings.registrationForm2.skip}</Link>
      </div>
    </div>
  </form>
);

export default RegistrationSecondStepForm;
