import React, { Component } from 'react';
import './rocket-desc.scss';
class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      filter: {
        launchSuccess: '',
        landSuccess: '',
        launchYear: ''
      }
    };
  }
  renderYear() {
    var indents = [];
    for (let i = 2006; i <= 2020; i++) {
      indents.push(
        <div
          className={
            this.state.filter.launchYear === i ? 'activeIndent' : 'indent'
          }
          key={i}
          onClick={() => this.setYear(i)}
        >
          {i}
        </div>
      );
    }
    return indents;
  }
  setYear(year) {
    if (year === this.state.filter.launchYear) {
      this.setState(
        prevState => ({
          filter: {
            ...prevState.filter,
            launchYear: ''
          }
        }),
        () => {
          this.props.updateList(this.state.filter);
        }
      );
    } else {
      this.setState(
        prevState => ({
          filter: {
            ...prevState.filter,
            launchYear: year
          }
        }),
        () => {
          this.props.updateList(this.state.filter);
        }
      );
    }
  }
  successLaunchTrue() {
    if (this.state.filter.launchSuccess === 'true') {
      this.setState(
        prevState => ({
          filter: {
            ...prevState.filter,
            launchSuccess: ''
          }
        }),
        () => {
          this.props.updateList(this.state.filter);
        }
      );
    } else {
      this.setState(
        prevState => ({
          filter: {
            ...prevState.filter,
            launchSuccess: 'true'
          }
        }),
        () => {
          this.props.updateList(this.state.filter);
        }
      );
    }
  }
  successLaunchFalse() {
    if (this.state.filter.launchSuccess === 'false') {
      this.setState(
        prevState => ({
          filter: {
            ...prevState.filter,
            launchSuccess: ''
          }
        }),
        () => {
          this.props.updateList(this.state.filter);
        }
      );
    } else {
      this.setState(
        prevState => ({
          filter: {
            ...prevState.filter,
            launchSuccess: 'false'
          }
        }),
        () => {
          this.props.updateList(this.state.filter);
        }
      );
    }
  }
  successLandTrue() {
    if (this.state.filter.landSuccess === 'true') {
      this.setState(
        prevState => ({
          filter: {
            ...prevState.filter,
            landSuccess: ''
          }
        }),
        () => {
          this.props.updateList(this.state.filter);
        }
      );
    } else {
      this.setState(
        prevState => ({
          filter: {
            ...prevState.filter,
            landSuccess: 'true'
          }
        }),
        () => {
          this.props.updateList(this.state.filter);
        }
      );
    }
  }
  successLandFalse() {
    if (this.state.filter.landSuccess === 'false') {
      this.setState(
        prevState => ({
          filter: {
            ...prevState.filter,
            landSuccess: ''
          }
        }),
        () => {
          this.props.updateList(this.state.filter);
        }
      );
    } else {
      this.setState(
        prevState => ({
          filter: {
            ...prevState.filter,
            landSuccess: 'false'
          }
        }),
        () => {
          this.props.updateList(this.state.filter);
        }
      );
    }
  }
  render() {
    return (
      <div className="filterContainer">
        <h2>Filters</h2>
        <div>
          <h3>Launch year</h3>
          <div className="years">{this.renderYear()}</div>
        </div>
        <div>
          <h3>Successfull Launch</h3>
          <div className="years">
            <div
              className={
                this.state.filter.launchSuccess === 'true'
                  ? 'activeIndent'
                  : 'indent'
              }
              onClick={() => this.successLaunchTrue()}
            >
              True
            </div>
            <div
              className={
                this.state.filter.launchSuccess === 'false'
                  ? 'activeIndent'
                  : 'indent'
              }
              onClick={() => this.successLaunchFalse()}
            >
              False
            </div>
          </div>
        </div>
        <div>
          <h3>Successfull Landing</h3>
          <div className="years">
            <div
              className={
                this.state.filter.landSuccess === 'true'
                  ? 'activeIndent'
                  : 'indent'
              }
              onClick={() => this.successLandTrue()}
            >
              True
            </div>
            <div
              className={
                this.state.filter.landSuccess === 'false'
                  ? 'activeIndent'
                  : 'indent'
              }
              onClick={() => this.successLandFalse()}
            >
              False
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FilterComponent;
