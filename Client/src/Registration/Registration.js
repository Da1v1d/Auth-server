import "./styles/registration.css"
import '../main.css'
import {Button, TextField, Paper} from '@mui/material';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { showErrorMessage , setLocalStorage } from "../logic";
import { routeUrls } from "../Routes/routeUrls";
import { useDispatch, useSelector} from 'react-redux';
import { addAccount, createUser } from "../store/action";   
import { useEffect } from "react";
import { useUserData } from "../customHooks/useUserData";
import * as api from '../api/api'
import FormComponent from "../components/reuzable-components/Form/FormComponent";
import CustomTextField from '../components/reuzable-components/Input/CustomTextField'
import withForm from '../components/reuzable-components/Form/withForm'


const  Registration= ()=>{
    const dispatch=useDispatch()
    const history=useHistory()
    const {register, 
        handleSubmit, 
        getValues, 
        formState: {errors , isDirty, isValid}
        } = useForm({
        mode:'onChange'
    })
    const data = useUserData()

    const onSubmit =  (data) => {
        const formData = 
        {
            login:data.login,
            password:data.password
        }
        api.createUser(formData)
        history.push(routeUrls.Login) 
    }

    return(
                <div className="form-window">
                    <form style={{width:'300px' ,}} onSubmit={handleSubmit(onSubmit)}  >
                        <h2 style={{textAlign:'center', color:'#17081d'}}><p>Registration</p></h2>
                        <div className="input">
                            <CustomTextField 
                                {...register('login',
                                {required:'login field is required',
                                minLength:{value:4, message:'less then 4'},
                                maxLength:{value:16 , message: 'more than 16'}})
                                }
                                label='login'
                                error={errors.login}
                                helperText={showErrorMessage(errors.login, errors.login?.message)}
                            />
                        </div>
                        <div className="input">
                              <CustomTextField 
                                {...register('password',
                                    {required:'password field is required',
                                    minLength:{value:4, message:'less then 4'},
                                    maxLength:{value:16 , message: 'more than 16'}})
                                }
                                label='password'
                                type='password'
                                error={errors.password}
                                helperText={showErrorMessage(errors.password, errors.password?.message)}
                            />
                        </div>
                        <div className="input">
                             <CustomTextField 
                                 {...register('confirm_password',
                                 {required:'confirm password field is required',
                                 minLength:{value:4, message:'less then 4'},
                                 maxLength:{value:16 , message: 'more than 16'},
                                 validate:value => 
                                     value===getValues('password') || 'aaa'
                                 })}
                                label='password'
                                type='password'
                                error={errors.confirm_password}
                                helperText={showErrorMessage(errors.confirm_password, errors.confirm_password?.message)}
                            />
                            
                        </div>

                        <div className="confirmreg">
                            <Button  
                                sx={{
                                    backgroundColor:'#171010',
                                    '&:hover':{
                                        backgroundColor:'#282430',
                                    }
                                }}
                                fullWidth
                                type="submit" 
                                variant="contained" 
                                disabled={!isValid || !isDirty} 
                            >
                                Create Account
                            </Button>
                            <Button 
                                sx={{
                                    backgroundColor:'#423F3E',
                                    margin:'7px',
                                    '&:hover':{
                                        backgroundColor:'#535252',
                                    }
                                }}
                                fullWidth
                                // color='error'
                                variant="contained" 
                                
                                onClick={()=>history.push(routeUrls.Main)}
                            > 
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
    )
}


export default withForm(Registration)