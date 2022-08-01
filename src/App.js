import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
      <div className="display">
        <div className="prev-operand"> 
        </div>
        <div className="result">
        </div>
      </div>
      </div>
      <div className="row">
        <button className="btn btn-primary col-2">7</button>
        <button className="btn btn-primary col-2">8</button>
        <button className="btn btn-primary col-2">9</button>
        <button className="btn btn-primary col-2">AC</button>
        <button className="btn btn-primary col-2">DEL</button>
      </div>
      <div className="row">
        <button className="btn btn-primary col-2">4</button>
        <button className="btn btn-primary col-2">5</button>
        <button className="btn btn-primary col-2">6</button>
        <button className="btn btn-primary col-2">*</button>
        <button className="btn btn-primary col-2">÷</button>
      </div>
      <div className="row">
        <div className='col-md-6'>
          <button className="btn btn-primary col-2">1</button>
          <button className="btn btn-primary col-2">2</button>
          <button className="btn btn-primary col-2">3</button>
        </div>
        <div className='col-md-3'>
          <button className="btn btn-primary well">+</button>
        </div>
        <div className='col-md-3'>
          <button className="btn btn-primary col-2">-</button>
        </div>
        <div className='row'>
          <button className="btn btn-primary col-2">.</button>
          <button className="btn btn-primary col-4">0</button>
        </div>
        <button className="btn btn-primary col-2">=</button>
      </div>
    </div>
  );
}

export default App;
