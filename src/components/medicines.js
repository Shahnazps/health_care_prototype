import React, { Component } from "react";
import data from './data/medicines.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './medicines.css';
import MedicineList from './medicine_list'
export default class Medicines extends Component {

    render() { return (<MedicineList data={data} />) }
}
