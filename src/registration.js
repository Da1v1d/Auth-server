import "./reg.css"
import {TextField,Button} from "@material-ui/core"
import {Link} from "react-router-dom"
import {useEffect, useState } from "react"
import { useDispatch} from 'react-redux';
// import {useForm} from "react-hook-form"
// import validator from  "react-validation"
// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input'



// const required = (value) => {
//     if (!value.toString().trim().length) {
//       return 
//     }
//   };
   
//   const email = (value) => {
//     if (!validator.isEmail(value)) {
//       return `${value} is not a valid email.`
//     }
//   };

//   const lt = (value, props) => {
//     if (!value.toString().trim().length > props.maxLength) {
//      alert("nononono")
//     }
//   }


//   const password = (value, props, components) => {
//     // NOTE: Tricky place. The 'value' argument is always current component's value.
//     // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
//     // But if we're changing 'confirm' component - the condition will always be true
//     // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
//     if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
//       // 'confirm' - name of input
//       // components['confirm'] - array of same-name components because of checkboxes and radios
//       return <span className="error">Passwords are not equal.</span>
//     }
//   };
  





export default function Registration(){
    const dispatch=useDispatch()


    // const accounts=useSelector(state=>state.accounts)


    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [repeatpassword,setrepeatpassword]=useState("")
    const [emaildirty,setemaildirty]=useState(false)
    const [passworddirty,setpassworddirty]=useState(false)
    const [repeatpassworddirty,setrepeatpassworddirty]=useState(false)
    const [emailerror,setemailerror]=useState("email can't be empty")
    const [passworderror,setpassworderror]=useState("password can't be empty")
    const [repeatpassworderror,setrepeaterror]=useState("repeatpassword can't be empty")
    const[picture,setpicture]= useState()
    const [formvalid,setformvalid]=useState(false)

    // const {register,handleSubmit}= useForm()
    useEffect(()=>{
        if(emailerror || passworderror || repeatpassworderror && password==repeatpassword){
            setformvalid(false)
        }
        else {setformvalid(true)}
    },[emailerror,passworderror,repeatpassworderror])


        

   

        const blurhandler=e=>{
            switch(e.target.name){
                case "email":
                setemaildirty(true) 
                 break

                    case "password":
                        setpassworddirty(true)
                        break

                        case "repeatpassword":
                            setrepeatpassworddirty(true )
                            break
            }
        }


        function regclick(){
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            localStorage.setItem("picture",picture)
            if(password===repeatpassword  ){
             dispatch({
                type:"addaccount",
                payload:{
                    email:email,
                    password:password,
                    id:Math.ceil(Math.random()*1000)
                }
            })
            console.log(localStorage.getItem("email"))
            console.log(localStorage.getItem("password"))
            console.dir(picture)
    }

        }





        const picturechoose=e=>{
            setpicture(e.target.files[0].name)
        }


        const emailhandler=e=>{
            setemail(e.target.value)
               const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(String(e.target.value).toLowerCase())){
                setemailerror("wrong email")
            }
           else setemailerror("")
                }



                function passclick(e){
                    setpassword(e.target.value)
                    if(e.target.value.length<4 || e.target.value.length >16){
                        setpassworderror("password dont be less than 4 and more than 16 symbols")
                    }
                    else {
                        setpassworderror("")
                    }
                    
                }
                function repeatpassclick(e){
                    setrepeatpassword(e.target.value)
                    if(e.target.value.length<4 || e.target.value.length >16){
                        setrepeaterror("repeatpassword dont be less than 4 and more than 16 symbols")
                    }
                    else {
                        setrepeaterror("")
                    }

                }




    return(
        <div className="reg">
                <div className="regwindow">
                    <h2 style={{textAlign:"center",marginTop:20,fontWeight:500}}>Registration</h2>
               <div className="regtextinput">
                   <form  >
                   <div>
                       {(emaildirty && emailerror) && <div><p>{emailerror}</p></div>}
                <TextField name="email"  onChange={e=>emailhandler(e)} value={email}  onBlur={e=>blurhandler(e)} variant="outlined" label="email"  style={{width:320}}/>

                </div>
                <div>
                    {(passworderror&& passworddirty) && <div><p>{passworderror}</p></div>}
                <TextField name="password"  name="password" onChange={e=>passclick(e)} value={password}  onBlur={e=>blurhandler(e)} variant="outlined" label="password"  style={{width:320}}/>
                </div>
                <div>
                {(repeatpassworderror&& repeatpassworderror) && <div><p>{repeatpassworderror}</p></div>}
                <TextField name="repeatpassword"  name="repeatpassword"  onChange={e=>repeatpassclick(e)} value={repeatpassword} onBlur={e=>blurhandler(e)} variant="outlined" label="repeat-password"  style={{width:320}}/>
                </div>
                <div>
                    <input  type="file" onChange={(e)=>picturechoose(e)}/>
                </div>
                </form>
                </div>

                <div className="confirmreg">
                <Link to={password==repeatpassword?"/login":"/reg"} style={{textDecoration:"none"}}><Button disabled={!formvalid} type="submit" variant="contained" color="primary" style={{marginRight:70}} onClick={regclick} >Reg</Button></Link> 
                <Link to="/main" style={{textDecoration:"none"}}><Button variant="contained" color="secondary"> Cancel</Button></Link>

                </div>
                </div>
        </div>
    )
}