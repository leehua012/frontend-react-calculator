import React, {Component} from "react";
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      matches: window.matchMedia("(min-width: 850px)").matches,
      sec_matches: window.matchMedia("(min-width:820px) and (max-width: 1120px)").matches
    };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 800px)").addEventListener('change', handler);
  }

  render() {

    return(
      <div className="container">
        <div className={`rounded calculator-container ${this.state.sec_matches? `calculator-container-tablet`: '' } ${this.state.matches? `calculator-container-desktop`:`calculator-container-mobile`}`}>
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
        <button className="btn btn-primary col-2 btn-n">7</button>
        <button className="btn btn-primary col-2 btn-n">8</button>
        <button className="btn btn-primary col-2 btn-n">9</button>
        <button className="btn btn-primary col-3 btn-vel">AC</button>
        <button className="btn btn-primary col-3 btn-db">DEL</button>
      </div>
      <div className="row gx-0 mb-1">
        <button className="btn btn-primary col-2 btn-n">4</button>
        <button className="btn btn-primary col-2 btn-n">5</button>
        <button className="btn btn-primary col-2 btn-n">6</button>
        <button className="btn btn-primary col-3 btn-org">*</button>
        <button className="btn btn-primary col-3 btn-org">÷</button>
      </div>
      <div className="row gx-0">
        <div className='col-6'>
          <div className="col-12 mb-1">
            <button className="btn btn-primary col-4 btn-n">1</button>
            <button className="btn btn-primary col-4 btn-n">2</button>
            <button className="btn btn-primary col-4 btn-n">3</button>
          </div>
          <div className="col-12">
            <button className="btn btn-primary col-6 btn-db">.</button>
            <button className="btn btn-primary col-6 btn-n">0</button>
          </div>
        </div>
        <div className='col-3'>
          <button className="btn btn-primary col-12 btn-org">
            <div className='col-12'>&nbsp;<br/>+<br/>&nbsp;</div>
            </button>
        </div>
        <div className='col-3'>
          <button className="btn btn-primary col-12 mb-1 btn-org">-</button>
          <button className="btn btn-primary col-12 btn-db">=</button>
        </div>
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default Calculator;