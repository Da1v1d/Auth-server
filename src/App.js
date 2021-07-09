import './App.css';
import {Switch,Route} from "react-router-dom"
import { info } from './route';






export default function App() {

  return (
    <Switch>
    <div className="App">
      <div className="appwindow">
        {info.map((el,i)=><Route exact={el.exact} path={el.path} key={i} >{el.component}</Route>)}
      </div>
    </div>
    </Switch>
  );
}






