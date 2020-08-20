import React, { Component } from "react";
import { Link } from "react-router-dom";
import strings from "../../localization";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = { items: props.items ? props.items : undefined };
  }

  componentWillReceiveProps(nextProps) {
    this.state.items = nextProps.items;
  }

  render() {
    return (
      <section>
        {this.state.items.map((item, index) => (
          <div
            className={index === this.props.activeIndex ? "active" : "slide"}
            key={index}
          >
            <div className="name">{item.name}</div>
            <div className="text">{item.description}</div>

            <Link className="btn lrp-btn btn-gray" to={"/villages"}>
              {strings.home.viewMore}
            </Link>
          </div>
        ))}
      </section>
    );
  }
}

export default Slide;
