import React, { Component } from "react";
import { Link } from "react-router-dom";
import Filter from "./filter";
export default class MedicineList extends Component {
  render() {
    let data = this.props.data;
    console.log(data);
    const newdata = data.map(data => {
      return (
        <li key={data.id} className="medicine">
          <div className="row">
            <div className="col-lg-2">
              <img
                className="medicine_image"
                src={data.image}
                alt={data.name}
              />
            </div>
            <div className="col-lg-10">
              <p className="medicine_name">{data.name}</p>
              <p className="medicine_description">
                {data.description}&nbsp;
                <Link to={"/medicines/" + data.id}>See more &raquo;</Link>
              </p>
            </div>
          </div>
        </li>
      );
    });
    const medicine_list_content = (
      <div>
        <h2 className="medicines_heading">Medicines</h2>
        <ul className="medicines_list">{newdata}</ul>
      </div>
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9">{medicine_list_content}</div>
          <div className="col-lg-3">
            <Filter />
          </div>
        </div>
      </div>
    );
  }
}
