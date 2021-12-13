import './App.css';
import {Switch,Route} from "react-router-dom"
import Routes from '../Routes/Routes'
import {BrowserRouter as Router} from "react-router-dom" 


export default function App() {

  return (     
    <div className='App'>
      <div className='appContainer'>
        <Router>
          <Routes />     
        </Router>
        </div>
    </div>
  );
}






