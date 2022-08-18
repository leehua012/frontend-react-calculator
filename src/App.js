import './App.css'
import Calculator from './components/calculatorComponent'
function App () {
  return (
    <div className="container">
      <div className='h1 mb-4 text-center tf'>{`${process.env.REACT_APP_NAME}`}</div>
      <Calculator />
    </div>
  )
}

export default App
