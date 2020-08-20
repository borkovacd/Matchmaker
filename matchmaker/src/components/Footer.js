import React, { Component } from "react";
import { Link } from "react-router-dom";
import strings from "../localization";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="footer-title">{strings.footer.partners}</div>
          </div>
          <div className="row">
            <img src={"images/lilly021_logo.png"} />
          </div>

          <div className="row">
            <div className="content-buttons-container">
              <a href="#" className="button-round-container">
                <i className="fab fa-twitter i"></i>
              </a>
              <a href="#" className="button-round-container">
                <i className="fab fa-facebook-f i"></i>
              </a>
              <a href="#" className="button-round-container">
                <i className="fa fa-share-alt i"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="links-container">
              <div>
                <Link class="link-container" to={"/terms"}>
                  {strings.footer.termsAndConditions}
                </Link>
              </div>
              <div>
                <Link class="link-container" to={"/privacy-policy"}>
                  {strings.footer.privacyPolicy}
                </Link>
              </div>
              <div>
                <Link class="link-container" to={"/help-center"}>
                  {strings.footer.helpCenter}
                </Link>
              </div>
            </div>
          </div>

          <div className="last-row">{strings.footer.copyright}</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
