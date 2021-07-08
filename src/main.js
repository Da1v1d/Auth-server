import "./main.css"
import { Button } from "@material-ui/core"

export default function Main(){

    return(
        <div className="main">
            <div className="buttons">
                <Button variant="outlined" color="primary">Login</Button>
                <Button variant="outlined" color="secondary">Registration</Button>

            </div>
        </div>
    )
}