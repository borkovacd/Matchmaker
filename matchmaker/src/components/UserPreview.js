import React, { Component } from "react";
import strings from "../localization";
import { Link } from "react-router-dom";
import { calculateAge } from "../util/DateUtil";
import { getGenderString } from "../constants/Gender";
import { getVillageName } from "../services/VillageService";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import * as Actions from "../actions/Actions";

class UserPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user ? props.user : undefined,
      //onlyTitle: props.onlyTitle ? props.onlyTitle : false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state.user = nextProps.user;
    //this.state.onlyTitle = nextProps.onlyTitle;
  }

  componentDidMount() {
    this.props.showLoader();

    getVillageName(this.state.user.village).then((response) => {
      this.props.hideLoader();
      /* if (!response || !response.ok) {
        return;
      } */

      this.setState({
        villageName: response.data.name,
      });
    });
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
              "/profile_photo.png)",
          }}
        ></div>

        <div className="content">
          <div className="first-second-row">
            <Link to={"/user?user=" + this.state.user.id} className="name">
              {this.state.user.name}
            </Link>
            <div className="last-active">{strings.user.lastActive}</div>
          </div>
          <div className="second-row">
            <div className="age">
              {calculateAge(this.state.user.birthday)} {strings.user.yearsOld}
            </div>
            <div className="last-active-2">
              {strings.user.before} ? {strings.user.minutes}
            </div>
          </div>
          <div className="middle-row first">
            <div className="info">
              {strings.user.village} {this.state.villageName}
            </div>
          </div>
          <div className="middle-row">
            <div className="info">
              {strings.user.searchFor}{" "}
              {getGenderString(this.state.user.interestedInGender)}
              {strings.user.from} {this.state.user.interestedInAgeMin}
              {strings.user.to} {this.state.user.interestedInAgeMax}
            </div>
          </div>
          <div className="middle-row">
            <div className="info">? {strings.user.photo}</div>
          </div>
          <div className="middle-row last">
            <div className="description">"{this.state.user.description}"</div>
          </div>
          <div className="last-row">
            <a href="#">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#">
              <i class="fas fa-comments"></i>
            </a>
            <a href="#">
              <i class="fas fa-heart"></i>
            </a>
            <a href="#">
              <i class="fas fa-kiss-wink-heart"></i>
            </a>
            <a href="#">
              <i class="fas fa-gift"></i>
            </a>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showLoader: Actions.showLoader,
      hideLoader: Actions.hideLoader,
    },
    dispatch
  );
}

function mapStateToProps({}) {
  return {};
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserPreview)
);
