import React from 'react'
import { Paper } from '@mui/material'
import '../../../main.css'



const FormComponent = ({children}) => {
    return (
        <div className='main-form-container'>
            <Paper 
                elevation={8}
                sx={{
                    width:'70%',
                    height:'600px',
                    minHeight:'400px',
                    display:'flex',
                    justifyContent:'space-around',
                    // alignItems:'center',
                }}
                >
                <div style={{width:'120%',height:'100%',backgroundColor:'#1F1F1F'}}>
                </div>
                    {children}
            </Paper>
        </div>
    )
}

export default FormComponent