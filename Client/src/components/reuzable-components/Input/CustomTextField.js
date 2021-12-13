import { TextField } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form";
import { showErrorMessage , setLocalStorage } from "../../../logic";




const CustomTextField = ({
    label,
    error,
    helperText,
    ...props
}, ref
) => {

    return (
        <TextField
            {...props}
            sx={{
                '& label.Mui-focused': {
                color: '#171010',
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: '#171010',
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                    borderColor: '#171010',
                    },
                    '&:hover fieldset': {
                    borderColor: '#171010',
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: '#171010',
                    }}
            }} 
            label={label}
            variant='standard'
            fullWidth
            error={Boolean(error)}
            helperText={helperText}
        >

        </TextField>
    )
}

export default React.forwardRef(CustomTextField)