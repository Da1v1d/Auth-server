import "./main.css"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function Main(){

    return(
        <div className="main">
            <div className="buttons">
                <Link to="/login"><Button variant="outlined" color="primary">Login</Button></Link>
                <Link to="/reg"><Button variant="outlined" color="secondary">Reg</Button></Link>
            </div>
        </div>
    )
}