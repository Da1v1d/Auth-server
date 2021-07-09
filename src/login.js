import "./login.css"
import { TextField ,Button} from "@material-ui/core"
import { useState } from "react"
import { Link } from "react-router-dom"





export default function Login(){
    const [email,setemail]=useState()
    const [password,setpassword]=useState()


        function handlemail(e){
            setemail(e.target.value)
        }
        function handlepassword(e){
            setpassword(e.target.value)
        }

        function click(){
            if(email==localStorage.getItem("email") && password==localStorage.getItem("password")){
                console.log(localStorage.getItem("password"))
                console.log(localStorage.getItem("email"))
                alert("Welcome User")
            }
            else alert("wrong email or password")
        }

        
    return(
        <div className="login">
                <div>
                <TextField  value={email} onChange={(e)=>handlemail(e)} variant="outlined" label="email"  style={{width:320}}/>
                </div>
                <div>
                <TextField  value={password} onChange={e=>handlepassword(e)} variant="outlined" label="password"  style={{width:320}}/>
                </div>
             <Link to={email==localStorage.getItem("email") && password==localStorage.getItem("password")?"/profile":"/login"}><Button onClick={click}>Login</Button></Link>
                <Link to="/main"><Button>Back</Button></Link>

        </div>
    )
}