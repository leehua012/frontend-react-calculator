import React, {Component} from "react";
import './calculator.css';

class Calculator extends Component {
  render() {
    return(
      <div className="container">
        <div className="calculator-container">
      <div className="row pb-0 p-3">
        <div className="display bg-dark rounded">
          <div className="prev-operand pt-2 text-white text-end fs-6">
            &nbsp;0+456
          </div>
          <div className="result pb-1 text-white text-end fs-4">
            0
          </div>
        </div>
      </div>
      <div className='row p-3'>
      <div className="row gx-0 mb-1">
        <button className="btn btn-primary col-2">7</button>
        <button className="btn btn-primary col-2">8</button>
        <button className="btn btn-primary col-2">9</button>
        <button className="btn btn-primary col-3">AC</button>
        <button className="btn btn-primary col-3">DEL</button>
      </div>
      <div className="row gx-0 mb-1">
        <button className="btn btn-primary col-2">4</button>
        <button className="btn btn-primary col-2">5</button>
        <button className="btn btn-primary col-2">6</button>
        <button className="btn btn-primary col-3">*</button>
        <button className="btn btn-primary col-3">÷</button>
      </div>
      <div className="row gx-0">
        <div className='col-6'>
          <div className="col-12 mb-1">
            <button className="btn btn-primary col-4">1</button>
            <button className="btn btn-primary col-4">2</button>
            <button className="btn btn-primary col-4">3</button>
          </div>
          <div className="col-12">
            <button className="btn btn-primary col-6">.</button>
            <button className="btn btn-primary col-6">0</button>
          </div>
        </div>
        <div className='col-3'>
          <button className="btn btn-primary col-12">
            <div className='col-12'>&nbsp;<br/>+<br/>&nbsp;</div>
            </button>
        </div>
        <div className='col-3'>
          <button className="btn btn-primary col-12 mb-1">-</button>
          <button className="btn btn-primary col-12 ">=</button>
        </div>
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default Calculator;