import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { COPSite, idpHint } from "../environment-variables";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.config = {};
    this.login = this.login.bind(this);
  }

  /* istanbul ignore next */
  componentDidMount() {
    this.Keycloak = require("keycloak-js");
    axios.get(`${COPSite}/api/config`).then(({ data }) => {
      ({
        KEYCLOAK_REALM: this.config.realm,
        KEYCLOAK_URI: this.config.url,
        WWW_KEYCLOAK_CLIENT_ID: this.config.clientId,
      } = data);
    });
  }

  /* istanbul ignore next */
  login(e) {
    e.preventDefault();
    const kc = this.Keycloak(this.config);
    kc.init()
      .then(() => {
        kc.login({
          idpHint,
          redirectUri: COPSite,
        });
      })
      .catch(() => {
        console.error("Keycloak failed to initialise");
      });
  }

  render() {
    const { children } = this.props;
    return children ? (
      <a
        className="govuk-header__link header-nav-items"
        href="#"
        onClick={this.login}
        rel="noreferrer"
      >
        {children}
      </a>
    ) : (
      <button
        className="govuk-button product-page-button button-container__button govuk-!-margin-right-3"
        draggable="false"
        onClick={this.login}
        rel="noreferrer"
        style={{ marginBottom: "0px" }}
      >
        <div style={{ paddingLeft: "20px" }}>
          Sign-in <i className="sign-in-arrow" />
        </div>
      </button>
    );
  }
}

LoginForm.propTypes = {
  children: PropTypes.node,
};
