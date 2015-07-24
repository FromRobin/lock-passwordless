import React from 'react';
import CountryCodeSelect from '../credentials/country_code_select';
import { changeCountryCode } from './actions';

export default class SelectCountryCode extends React.Component {
  render() {
    return (
      <div className="auth0-lock-content">
        <CountryCodeSelect autoFocus={this.props.lock.getIn(["ui", "focusInput"])}
          selectHandler={::this.countryCodeSelectHandler} />
      </div>
    );
  }

  countryCodeSelectHandler(countryCode) {
    changeCountryCode(this.props.lock.get("id"), countryCode);
  }
}