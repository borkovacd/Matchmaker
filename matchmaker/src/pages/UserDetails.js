import React from "react";
import Page from "../common/Page";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/Actions";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import { getUserDetails } from "../services/UserService";
import strings from "../localization";
import { Link } from "react-router-dom";
import { calculateAge } from "../util/DateUtil";
import { getGenderString } from "../constants/Gender";
import { getRelationshipTypesStrings } from "../constants/RelationshipType";
import { getVillageName, getCountryName } from "../services/VillageService";

class UserDetails extends Page {
  params = [{ name: "user", defaultValue: -1 }];

  constructor(props) {
    super(props);

    this.state = {
      myDescriptionActive: true,
      lookingForInPartnerActive: false,
      myInterestsActive: false
    };
  }

  activateMyDescritpion() {
    this.setState({
      myDescriptionActive: true,
      lookingForInPartnerActive: false,
      myInterestsActive: false
    });
  }

  activateLookingForInPartner() {
    this.setState({
      myDescriptionActive: false,
      lookingForInPartnerActive: true,
      myInterestsActive: false
    });
  }

  activateMyInterests() {
    this.setState({
      myDescriptionActive: false,
      lookingForInPartnerActive: false,
      myInterestsActive: true
    });
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    this.loadParams();

    this.props.showLoader();

    getUserDetails(this.state.searchData.user).then(response => {
      this.props.hideLoader();

      /*if (!response || !response.ok) {
        return;
      }*/

      this.setState({
        user: response.data
      });

      getVillageName(this.state.user.village).then(response => {
        this.props.hideLoader();
        /* if (!response || !response.ok) {
            return;
          } */

        this.setState({
          villageName: response.data.name
        });
      });
    });
  }

  render() {
    if (!this.state.user) {
      return "";
    }

    return (
      <div className="search-results-page">
        <div className="find-your-match">{strings.searchResults.findMatch}</div>
        <div className="center-and-margin">
          <Link className="btn btn-blue uppercase" to={"/registration"}>
            {strings.menu.Register}
          </Link>
        </div>
        <div className="profile-component">
          <div className="header">
            <div className="left-row">
              <div className="header-title">{strings.menu.Profile}:</div>
              <div className="header-name">{this.state.user.name}</div>
              <div className="flag-container">
                <img src="images/flags/rs.png"></img>
              </div>
            </div>
            <div className="right-row">
              <div className="uppercase"> {strings.user.lastActive}</div>
              <div>
                {strings.user.before} ?{strings.user.minutes}
              </div>
            </div>
          </div>
          <div className="content">
            <div className="first-column">
              <div
                className="picture"
                style={{
                  background:
                    "url(images/users_photos/" +
                    this.state.user.id +
                    "/profile_photo.png)"
                }}
              ></div>
              <div className="btn-see-all">
                <Link className="btn btn-see-all" to={"/all-photos"}>
                  {strings.user.seeAllPhotos}
                </Link>
              </div>
            </div>
            <div className="second-column">
              <div className="line-height-6">
                {strings.registrationForm.name}:
              </div>
              <div className="line-height-6">
                {strings.registrationForm.gender}:
              </div>
              <div className="line-height-6">
                {strings.registrationForm.intrestedInAge}:
              </div>
              <div className="line-height-6">{strings.user.country}:</div>
              <div className="line-height-6">
                {strings.registrationForm.intrestedInGender}:
              </div>
              <div className="line-height-6">
                {strings.registrationForm.intrestedFor}
              </div>
            </div>
            <div className="third-column">
              <div className="line-height-6">{this.state.user.name}</div>
              <div className="line-height-6">
                {getGenderString(this.state.user.gender)}
              </div>
              <div className="line-height-6">
                {calculateAge(this.state.user.birthday)} {strings.user.yearsOld}
              </div>
              <div className="line-height-6">
                {getCountryName(this.state.user.country)},{" "}
                {this.state.villageName}
              </div>
              <div className="line-height-6">
                {strings.user.searchFor}
                {getGenderString(this.state.user.interestedInGender)}
                {strings.user.from} {this.state.user.interestedInAgeMin}
                {strings.user.to} {this.state.user.interestedInAgeMax}
              </div>
              <div className="line-height-6">
                {getRelationshipTypesStrings(this.state.user.interestedFor)}
              </div>
            </div>
            <div className="fourth-column">
              <div className="action-text">
                <a href="#">
                  <i className="fas fa-envelope"></i>
                  <div className="make-space">{strings.user.sendMessage}</div>
                </a>
              </div>
              <div className="action-text">
                <a href="#">
                  <i className="fas fa-comments"></i>
                  <div className="make-space">{strings.user.chat}</div>
                </a>
              </div>
              <div className="action-text">
                <a href="#">
                  <i className="fas fa-heart"></i>
                  <div className="make-space">{strings.user.addToHotList}</div>
                </a>
              </div>
              <div className="action-text">
                <a href="#">
                  <i className="fas fa-kiss-wink-heart"></i>
                  <div className="make-space">{strings.user.sendKiss}</div>
                </a>
              </div>
              <div className="action-text">
                <a href="#">
                  <i className="fas fa-gift"></i>
                  <div className="make-space">{strings.user.sendGift}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-user-grid-container">
          <button
            className="about-button"
            onClick={() => this.activateMyDescritpion()}
          >
            <div className="header red"></div>
            <div className="content">{strings.user.myDescription}</div>
          </button>
          <button
            className="about-button"
            onClick={() => this.activateLookingForInPartner()}
          >
            <div className="header blue"></div>
            <div className="content">{strings.user.lookingForInPartner}</div>
          </button>
          <button
            className="about-button"
            onClick={() => this.activateMyInterests()}
          >
            <div className="header white"></div>
            <div className="content">{strings.user.myInterests}</div>
          </button>
        </div>
        <div className="about-user-content-container">
          <div
            className={` ${
              this.state.myDescriptionActive ? "my-description-container" : ""
            }
            ${
              this.state.lookingForInPartnerActive
                ? "looking-for-container"
                : ""
            }
            ${this.state.myInterestsActive ? "my-interests-container" : ""}
            `}
          >
            <div className="first-third-column">
              <div className="row">
                <div>{strings.user.nationality}:</div>
              </div>
              <div className="row">
                <div>{strings.user.languages}:</div>
              </div>
              <div className="row">
                <div>{strings.user.height}:</div>
              </div>
              <div className="row">
                <div>{strings.user.weight}:</div>
              </div>
              <div className="row">
                <div>{strings.user.figure}:</div>
              </div>
              <div className="row">
                <div>{strings.user.hair}:</div>
              </div>
              <div className="row">
                <div>{strings.user.hairLength}:</div>
              </div>
              <div className="row">
                <div>{strings.user.eyes}:</div>
              </div>
              <div className="row">
                <div>{strings.user.ethnicOrigin}:</div>
              </div>
              <div className="row">
                <div>{strings.user.religion}:</div>
              </div>
              <div className="row">
                <div>{strings.user.academicDegree}:</div>
              </div>
              <div className="row">
                <div>{strings.user.profession}:</div>
              </div>
            </div>
            <div className="second-fourth-column"></div>
            <div></div>
            <div className="first-third-column">
              <div className="row">
                <div>{strings.user.income}:</div>
              </div>
              <div className="row">
                <div>{strings.user.maritalStatus}:</div>
              </div>
              <div className="row">
                <div>{strings.user.children}:</div>
              </div>
              <div className="row">
                <div>{strings.user.smokingHabits}:</div>
              </div>
              <div className="row">
                <div>{strings.user.drinkingHabits}:</div>
              </div>
              <div className="row">
                <div>{strings.user.zodiac}:</div>
              </div>
            </div>
            <div className="second-fourth-column"></div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showLoader: Actions.showLoader,
      hideLoader: Actions.hideLoader
    },
    dispatch
  );
}

function mapStateToProps({ siteDataReducers }) {
  return siteDataReducers;
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserDetails)
);
