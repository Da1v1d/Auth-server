import "./main.css"
import './Registration/styles/registration.css'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { routeUrls } from "./Routes/routeUrls";
import { Paper } from "@mui/material";

const Main = () => {
    const history=useHistory()

    const handleClickLogin = () =>{
        history.push(routeUrls.Login)
    }

    const handleClickReg = () =>{
        history.push(routeUrls.Registration)
    }

    return(
        <div className="reg-container">
            <Paper
             elevation={8}
             sx={{
                 width:'80%',
                 height:'600px',
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',
             }}>
                 <div className="reg-window">
            <div className='confirmreg'>
                <Button
                    variant='contained'  
                    sx={{
                        backgroundColor:'#000957',
                        '&:hover':{
                            backgroundColor:'#0F1975',
                        }
                    }}
                    fullWidth
                    onClick={handleClickLogin}
                >
                    Login
                </Button>
                <Button 
                    variant='contained'  
                    onClick={handleClickReg}
                    fullWidth 
                    color='success'
                    sx={{
                        margin:'7px',
                    }} 
                >
                    Reg
                </Button>
                </div>
            </div>
            </Paper>
        </div>
    )
}
export default Main