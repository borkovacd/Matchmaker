import React, { Component } from "react";
import { getVillages } from "../services/VillageService";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import * as Actions from "../actions/Actions";
import Slide from "../components/slider/slide";
import LeftArrow from "../components/slider/left-arrow";
import RightArrow from "../components/slider/right-arrow";
import QuickSearch from "../components/forms/QuickSearchForm";
import strings from "../localization";
import { getNewPeople } from "../services/UserService";
import { calculateAge } from "../util/DateUtil";
import VillagePreview from "../components/VillagePreview";
import { OK } from "http-status-codes";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      villages: [],
      newPeople: [],
    };
  }

  componentDidMount() {
    this.props.showLoader();

    getVillages().then((response) => {
      this.props.hideLoader();

      /* if (!response || !response.ok) {
        return;
      } */

      this.setState({
        villages: response.data.villages,
      });
    });

    getNewPeople(4).then((response) => {
      this.props.hideLoader();

      if (response.status !== OK) {
        return;
      }

      this.setState({
        newPeople: response.data,
      });
    });
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.villages.length;

    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.villages.length;

    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }

    this.setState({
      activeIndex: index,
    });
  }

  renderNewPeople() {
    let result = [];

    if (!this.state.newPeople) {
      return result;
    }

    {
      for (let user of this.state.newPeople) {
        result.push(
          <div key={user.id} className="item-with-text">
            <div
              className="item-photo-container"
              style={{
                background: "url(images/circle.png)",
              }}
            >
              <img
                src={"images/users_photos/" + user.id + "/circle_image.png"}
              ></img>
            </div>
            <div className="item-text">
              {user.name}, {calculateAge(user.birthday)}
            </div>
          </div>
        );
      }
    }

    return result;
  }

  renderVillages() {
    let result = [];
    let numberOfVillages = 0;

    if (!this.state.villages) {
      return result;
    }

    {
      for (let village of this.state.villages) {
        if (numberOfVillages < 3) {
          result.push(<VillagePreview village={village} key={village.id} />);
          numberOfVillages++;
        }
      }
    }

    return result;
  }

  render() {
    return (
      <div id="home">
        <div
          className="slider-items-container"
          style={{
            background: "url(../../images/slider-index.png)",
          }}
        >
          <LeftArrow goToPrevSlide={() => this.goToPrevSlide()} />
          <div className="slider-grid-container">
            <div className="search-form-container">
              <QuickSearch />
            </div>
            <div className="slider-village-container">
              <Slide
                items={this.state.villages}
                activeIndex={this.state.activeIndex}
                goToNextSlide={() => this.goToNextSlide()}
              />
            </div>
          </div>
          <RightArrow goToNextSlide={() => this.goToNextSlide()} />
        </div>
        <div className="new-people-container">
          <div className="new-people-title">
            <div className="flag">
              <img src="images/flags/rs.png"></img>
            </div>
            <div className="title">{strings.home.newPeople}</div>
          </div>
          <div className="items-container">{this.renderNewPeople()}</div>
        </div>
        <div className="serbia-villages-container">
          <div className="serbia-villages-title">
            <div className="flag">
              <img src="images/flags/rs.png"></img>
            </div>
            <div className="title">{strings.home.beuty}</div>
          </div>
          <div className="items-container">{this.renderVillages()}</div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showLoader: Actions.showLoader,
      hideLoader: Actions.hideLoader,
      //setFilterData: Actions.setData,
    },
    dispatch
  );
}

function mapStateToProps({ authReducers }) {
  return {
    user: authReducers.user,
    //filterReducers
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
