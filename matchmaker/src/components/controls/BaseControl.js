import { Component } from "react";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class BaseControl extends Component {
  constructor(props) {
    super(props);
  }

  createEvent(value) {
    if (this.props.onChange) {
      let event = {
        target: {
          name: this.props.name,
          value: value
        }
      };

      this.props.onChange(event);
    }
  }
}

/*function mapStateToProps({ siteDataReducers }) {
  return {
    language: siteDataReducers.language
  };
}

export default withRouter(connect(mapStateToProps)(BaseControl));*/
export default BaseControl;
