import React , {useEffect} from 'react'

import "./styles/login.css"
import '../main.css'
import '../Registration/styles/registration.css'
import '../Registration/styles/registration.css'
import { TextField ,Button, Paper} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { getLocalStorage, setLocalStorage, showErrorMessage } from "../logic"
import { routeUrls } from "../Routes/routeUrls"
import { useHistory } from "react-router"
import { loginUser } from "../store/action"
import * as api from '../api/api'
import { useUserData } from '../customHooks/useUserData'
import axios from 'axios'
import { endpoints } from '../api/endpoint'
import FormComponent from '../components/reuzable-components/Form/FormComponent'
import CustomTextField from '../components/reuzable-components/Input/CustomTextField'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'






export default function Login(){
    const {data} = useUserData()
    const dispatch = useDispatch()
    const history = useHistory()
    const { 
        register,
        formState,
        getValues,
        handleSubmit
        } = useForm({mode:'onChange'})
    const {errors , isValid , isDirty} = formState


        const formSubmit = async (formData) => {
                dispatch(loginUser(formData))
                history.push(routeUrls.Home)
        }
        
    return(
      <FormComponent>
            <div className="form-window">
            <form
                onSubmit={handleSubmit(formSubmit)}
                style={{width:'300px'}}
            >
                <h2 style={{textAlign:'center', color:'#17081d'}}><p>Login</p></h2>
                <div className="input">
                    {/* <TextField
                        {...register('login',{
                            required:'login field is required',
                            minLength:{value:4, message:'less then 4'},
                            maxLength:{value:16 , message: 'more than 16'}})
                        }
                        variant="standard" 
                        label="login" 
                        fullWidth 
                        error={Boolean(errors.login)}
                        helperText={showErrorMessage(errors.login, errors.login?.message)}
                    /> */}
                    <CustomTextField 
                         {...register('login',{
                            required:'login field is required',
                            minLength:{value:4, message:'less then 4'},
                            maxLength:{value:16 , message: 'more than 16'}})
                        }
                        label="login" 
                        error={errors.login}
                        helperText={showErrorMessage(errors.login, errors.login?.message)}
                    /> 
                </div>
                <div className="input">
                    {/* <TextField  
                        {...register('password',
                            {required:'password field is required',
                            minLength:{value:4, message:'less then 4'},
                            maxLength:{value:16 , message: 'more than 16'}
                            })
                        }
                        variant="standard" 
                        label="password"  
                        fullWidth
                        error={Boolean(errors.password)}
                        helperText={showErrorMessage(errors.password, errors.password?.message)}
                    /> */}
                     <CustomTextField 
                        {...register('password',
                            {required:'password field is required',
                            minLength:{value:4, message:'less then 4'},
                            maxLength:{value:16 , message: 'more than 16'}
                            })
                        }
                        label='password'
                        error={errors.password}
                        helperText={showErrorMessage(errors.password, errors.password?.message)}
                    /> 
                </div>
                <div className='confirmreg'>
                <Button 
                    fullWidth
                    variant='contained' 
                    disabled={!isValid || !isDirty} 
                    sx={{
                        backgroundColor:'#171010',
                        '&:hover':{
                            backgroundColor:'#282430',
                        }
                    }}
                    type="submit" 
                >
                    Login
                </Button>
                <Button 
                    fullWidth
                    variant='contained' 
                    sx={{
                        backgroundColor:'#423F3E',
                        margin:'7px',
                        '&:hover':{
                            backgroundColor:'#535252',
                        }
                    }}
                    onClick={()=> history.push(routeUrls.Main)}
                >
                    Back
                </Button>
                </div>
                </form>

                </div>
            </FormComponent>
    )
}