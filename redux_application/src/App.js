import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { inc,dec } from './config/store/actions';

function App() {

  const state = useSelector((state)=> state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>React Redux</h1>
      <h3>{state}</h3>
      <button onClick={()=>dispatch(dec())}>-</button>
      <button onClick={()=>dispatch(inc())}>+</button>
    </div>
  );
}

export default App;
