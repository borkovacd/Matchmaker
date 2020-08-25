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

  renderStars(value) {
    if (value === 1) {
      return (
        <React.Fragment>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </React.Fragment>
      );
    } else if (value === 2) {
      return (
        <React.Fragment>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </React.Fragment>
      );
    } else if (value === 3) {
      return (
        <React.Fragment>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </React.Fragment>
      );
    } else if (value === 4) {
      return (
        <React.Fragment>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </React.Fragment>
      );
    } else if (value === 5) {
      return (
        <React.Fragment>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </React.Fragment>
      );
    }
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
            {this.state.myDescriptionActive && (
              <React.Fragment>
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
                <div className="second-fourth-column">
                  <div className="row">
                    <div>{this.state.user.nationality}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.languages}</div>
                  </div>
                  <div className="row wider">
                    <div>{this.state.user.height}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.weight}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.figure}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.hair}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.hairLength}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.eyes}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.ethnicOrigin}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.religion}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.academicDegree}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.profession}</div>
                  </div>
                </div>
                
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
                <div className="second-fourth-column">
                  <div className="row">
                    <div>{this.state.user.income}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.maritalStatus}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.children}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.smokingHabits}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.drinkingHabits}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.zodiac}</div>
                  </div>
                </div>
              </React.Fragment>
            )}
            {this.state.lookingForInPartnerActive && (
              <React.Fragment>
                <div className="first-column">
                  <div className="row">
                    <div>{strings.registrationForm.intrestedInGender}:</div>
                  </div>
                  <div className="row">
                    <div>{strings.registrationForm.intrestedFor}</div>
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
                <div className="second-column">
                  <div className="row">
                    <div>
                      {getGenderString(this.state.user.interestedInGender)}{" "}
                      {this.state.user.interestedInAgeMin} -
                      {this.state.user.interestedInAgeMax}{" "}
                      {strings.user.yearsOld}
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      {getRelationshipTypesStrings(
                        this.state.user.interestedFor
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      {this.state.user.interestedInHeightMin} -{" "}
                      {this.state.user.interestedInHeightMax} cm
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      {" "}
                      {this.state.user.interestedInWeightMin} -{" "}
                      {this.state.user.interestedInWeightMax} kg
                    </div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.interestedInFigure}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.interestedInHair}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.interestedInHairLength}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.interestedInEyes}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.interestedInEthnicOrigin}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.interestedInReligion}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.interestedInAcademicDegree}</div>
                  </div>
                  <div className="row">
                    <div>{this.state.user.interestedInProfession}</div>
                  </div>
                </div>
              </React.Fragment>
            )}
            {this.state.myInterestsActive && (
              <React.Fragment>
                <div className="first-column">
                  <div className="row">
                    <div>{strings.userInterests.arts}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.kitchen}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.oddJobs}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.theater}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.cars}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.lecture}</div>
                  </div>
                </div>
                <div className="second-column">
                  <div className="row">
                    {this.renderStars(this.state.user.interests[0].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[1].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[2].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[3].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[4].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[5].value)}
                  </div>
                </div>
                <div className="first-column">
                  <div className="row">
                    <div>{strings.userInterests.painting}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.travels}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.cinema}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.literature}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.restaurant}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.tv}</div>
                  </div>
                </div>
                <div className="second-column">
                  <div className="row">
                    {this.renderStars(this.state.user.interests[6].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[7].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[8].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[9].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[10].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[11].value)}
                  </div>
                </div>
                <div className="first-column">
                  <div className="row">
                    <div>{strings.userInterests.dance}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.museum}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.shopping}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.internet}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.animals}</div>
                  </div>
                  <div className="row">
                    <div>{strings.userInterests.sport}</div>
                  </div>
                </div>
                <div className="second-column">
                  <div className="row">
                    {this.renderStars(this.state.user.interests[12].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[13].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[14].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[15].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[16].value)}
                  </div>
                  <div className="row">
                    {this.renderStars(this.state.user.interests[17].value)}
                  </div>
                </div>
              </React.Fragment>
            )}
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
