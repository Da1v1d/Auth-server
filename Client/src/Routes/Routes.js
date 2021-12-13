import { Route, Switch } from "react-router"
import { routes } from "./routesConfig"
import Login from "../Login/Login"
import Registration from "../Registration/Registration"
import { routeUrls } from "./routeUrls"
import AccesControl from "../components/AccesControl/AccesControl"


const Routes = () =>{
    return (
        <Switch>
            <Route path={routeUrls.Login}> <Login /> </Route>
            <Route path={routeUrls.Registration}> <Registration /> </Route>
            {/* <AccesControl> */}
                {routes.map((route,id)=>
                    <Route 
                        key={id} 
                        path={route.path} 
                        exact={route.exact}
                    >
                        {route.component}
                    </Route>
                
                )}
            {/* </AccesControl> */}
        </Switch>
    )
}

export default Routes