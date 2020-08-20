import React, { Component } from "react";
import { getVillages } from "../services/HomeService";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import * as Actions from "../actions/Actions";
import Slide from "../components/slider/slide";
import LeftArrow from "../components/slider/left-arrow";
import RightArrow from "../components/slider/right-arrow";
import QuickSearch from "../components/forms/QuickSearchForm";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      villages: [],
      data: {}
    };
  }

  componentDidMount() {
    this.props.showLoader();

    getVillages().then(response => {
      this.props.hideLoader();

      /* if (!response || !response.ok) {
        return;
      } */

      this.setState({
        villages: response.data.villages
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
      activeIndex: index
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
      activeIndex: index
    });
  }

  render() {
    return (
      <div id="home">
        <div
          className="slider-items-container"
          style={{
            background: "url(../../images/slider-index.png)"
          }}
        >
          <LeftArrow goToPrevSlide={() => this.goToPrevSlide()} />
          <div className="slider-grid-container">
            <div className="search-form-container">
              <QuickSearch
                data={this.state.data}
                onSubmit={() => this.search()}
              />
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

function mapStateToProps({ menuReducers, authReducers }) {
  return { menu: menuReducers, user: authReducers.user };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
