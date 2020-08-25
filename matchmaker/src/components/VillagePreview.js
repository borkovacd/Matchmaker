import React, { Component } from "react";
import strings from "../localization";
import { Link } from "react-router-dom";

class VillagePreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      village: props.village ? props.village : undefined
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      village: nextProps.village
    });
  }

  renderVillage() {
    return (
      <React.Fragment>
        <div
          className="header"
          style={{
            background:
              "url(images/villages_photos/" +
              this.state.village.id +
              "/header_photo.png)"
          }}
        ></div>

        <div className="content">
          <div className="content-title-buttons">
            <div className="content-title">
              <Link
                className="content-title"
                to={"/village?village=" + this.state.village.id}
              >
                {this.state.village.name}
              </Link>
            </div>
            <div className="content-buttons-container">
              <Link className="blue-link" to={"/findYourMatch"}>
                {strings.home.findYourMatch}
              </Link>
            </div>
          </div>
          <div className="content-text">{this.state.village.description}</div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    if (!this.state.village) {
      return "";
    }

    return (
      <div id={this.state.village.id} className="village-preview-container">
        {this.renderVillage()}
      </div>
    );
  }
}

export default VillagePreview;
