import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import MedicineList from './components/medicine_list'
function App() {

  return (<div class="container"><div class="row"><Link to="/medicines/">Jump to medicines</Link></div></div>)
}

export default App;
