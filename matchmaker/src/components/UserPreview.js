import React, { Component } from "react";
import strings from "../localization";
import { Link } from "react-router-dom";
import { calculateAge } from "../util/DateUtil";

class UserPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user ? props.user : undefined
      //onlyTitle: props.onlyTitle ? props.onlyTitle : false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state.user = nextProps.user;
    //this.state.onlyTitle = nextProps.onlyTitle;
  }

  renderUser() {
    //if (!this.state.onlyTitle) {
    return (
      <React.Fragment>
        <div
          className="profile-photo"
          style={{
            background:
              "url(images/users_photos/" +
              this.state.user.id +
              "/profile_photo.png)"
          }}
        ></div>

        <div className="content">
          <div className="first-second-row">
            <div className="name">{this.state.user.name}</div>
            <div className="last-active">{strings.user.lastActive}</div>
          </div>
          <div className="second-row">
            <div className="age">
              {calculateAge(this.state.user.birthday)} {strings.user.yearsOld}
            </div>
            <div>{strings.user.lastActive}</div>
          </div>
        </div>
      </React.Fragment>
    );
  } /*else {
      return (
        <div className="related-post">
          <div
            className="header"
            style={{
              background: "url(" + this.state.blog.image + ")"
            }}
          ></div>

          <Link className="title" to={"/blog?blog=" + this.state.blog.id}>
            {this.state.blog.title}
          </Link>
        </div>
      );
    }
  }*/

  render() {
    if (!this.state.user) {
      console.log("Nije prosledjen user kao props!"); //
      return "";
    }

    return (
      <div id={this.state.user.id} className="user-preview-container">
        {this.renderUser()}
      </div>
    );
  }
}

export default UserPreview;
