import React, {useState} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import AreaChart from './AreaChart'
import LineChart from './LineChart'
import BarChart from './BarChart'

export default function App() {
  const [chart, setChart] = useState('bar')
  function handleChange (e) {
    setChart(e.target.value)
  }
  return (
    <div className="App">
      <Header />
      <div className="data-grid">
        <div className="tools-container">
          <select onChange={handleChange}>
            <option value="bar">Bar</option>
            <option value="line">Line</option>
            <option value="area">Area</option>
          </select>
        </div>
        <div className="viz-container">
          <div className="line-container">
            {chart ==='bar' && <BarChart />}
            {chart === 'area' && <AreaChart />}
            {chart === 'line' && <LineChart />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
