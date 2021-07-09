import './App.css';
import {Switch,Route} from "react-router-dom"
import { info } from './route';
import Loginn from "./test";






export default function App() {

  return (
    <Switch>
    <div className="App">
      <div className="appwindow">
        {info.map((el,i)=><Route exact={el.exact} path={el.path} >{el.component}</Route>)}
      </div>
    </div>
    </Switch>
    // <Loginn />
  );
}






