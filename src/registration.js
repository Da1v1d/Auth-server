import "./reg.css"
import {TextField,Button} from "@material-ui/core"
import {Route} from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';


export default function Registration(){
    const dispatch=useDispatch()

    const accounts=useSelector(state=>state.accounts)


    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [repeatpassword,setrepeatpassword]=useState("")
    const [emaildirty,setemaildirty]=useState(false)
    const [passworddirty,setpassworddirty]=useState(false)
    const [emailerror,setemailerror]=useState("email can't be empty")
    const [passworderror,setpassworderror]=useState("password can't be empty")



   

        const blurhandler=e=>{
            switch(e.target.name){
                case "email":
                    setemaildirty(true)

                    case "password":
                        setpassworddirty(true)
            }
        }


        function regclick(){
            if(accounts.map(el=>el.email.indexof(email)===-1) && 
              accounts.map(el=>el.password.indexof(password)===-1) ){
            return dispatch({
                type:"addaccount",
                payload:{
                    email:email,
                    password:password,
                    id:Math.ceil(Math.random()*100000)
                }
            })
        }

        }


        const emailhandler=e=>{
            setemail(e.target.value)
               const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(String(e.target.value).toLowerCase())){
                setemailerror("wrong email")
            }
            setemailerror("")
                }




    return(
        <div className="reg">
                <div className="regwindow">
                    <h2 style={{textAlign:"center",marginTop:20,fontWeight:500}}>Registration</h2>
               <div className="regtextinput">
                   <div>
                      {emaildirty || emailerror?<h1>{emailerror}</h1>:null}
                <TextField onChange={e=>emailhandler(e)} value={email} onBlur={e=>blurhandler(e)} variant="outlined" label="email"  style={{width:320}}/>
                </div>
                <div>
                <TextField value={password} onBlur={e=>blurhandler(e)} variant="outlined" label="password"  style={{width:320}}/>
                </div>
                <div>
                <TextField value={repeatpassword} onBlur={e=>blurhandler(e)} variant="outlined" label="repeat-password"  style={{width:320}}/>
                </div>
                </div>

                <div className="confirmreg">
                <Button variant="contained" color="primary" style={{marginRight:70}} onClick={regclick} >Registrate</Button>
                <Button variant="contained" color="secondary"> Cancel</Button>

                </div>
                </div>
        </div>
    )
}