import React, { useEffect } from 'react'
import {Dialog, DialogTitle} from '@mui/material'

const BaseDialog = ({
    isOpen,
    title,
    ...props
}) =>{

    const dialogStyles = {

        '&.MuiDialog-paper':{
            background:'#26262A',
            color:'white'
        },

        '&.MuiDialogTitle-root':{
            display:'flex',
            justifyContent:'space-between', 
            alignItems:'center'
        }
    }

    useEffect(()=>{

    },[])


    return (
        <Dialog
            open={isOpen}
            fullWidth
            sx={dialogStyles}
        >
            <DialogTitle>
                {title}
                <CloseIcon sx={{color:'white'}} onClick={() => setOpen(false)} />
            </DialogTitle>

        </Dialog>
    )
}

export default BaseDialog