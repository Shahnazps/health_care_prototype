import React, { Component } from "react";
import data from "./data/medicines.json";

class Filter extends Component {
  state = {
    open: false
  };
  // showCompany() {
  //   const companyList = data.map(name => {
  //     return <li key={name.id}>{name.mfgBy}</li>;
  //   });
  //   return (
  //     <ul>
  //       <li>{companyList}</li>
  //     </ul>
  //   );
  // }

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  };

  render() {
    return (
      <div className="filter" style={{ marginTop: "10%" }}>
        <h4 className="filter_heading">Filters</h4>
        <hr />
        <div>
          <button
            type="button"
            className="company"
            onClick={this.handleButtonClick}
          >
            Company
          </button>
          {this.state.open && (
            <div className="dropdown">
              <ul>
                {data.map(name => (
                  <li key={name.id}>{name.mfgBy}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <hr />
        <div>
          <button
            type="button"
            className="salt"
            onClick={this.handleButtonClick}
          >
            Salt
          </button>
          {this.state.open && (
            <div className="dropdown">
              <ul></ul>
            </div>
          )}
        </div>
        <hr />
        <div>
          <button
            type="button"
            className="cost"
            onClick={this.handleButtonClick}
          >
            Cost
          </button>
          {this.state.open && (
            <div className="dropdown">
              <ul>
                {data.map(name => (
                  <li key={name.id}>{name.cost}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <hr />
      </div>
    );
  }
}

export default Filter;
