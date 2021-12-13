import { Dialog, DialogActions, DialogContent, DialogTitle, MenuItem , Box, IconButton } from '@mui/material'
import React , {useEffect} from 'react'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';



const CustomMenuItemDialog = ({title , closeMenu,  ...props}) => {
    const [ open , setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }
  
    return (
        <>
        <MenuItem
            onClick={openModal}
        >
            My Account 
        </MenuItem>

            <Dialog
                {...props}                
                fullWidth
                open={open}
                maxWidth='sm'
            >
                <DialogTitle>
                    <Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                        {title}
                            <CloseIcon sx={{color:'white'}} onClick={() => setOpen(false)} />
                        
                    </Box>
                </DialogTitle>

                <DialogContent>
                    
                </DialogContent>

                <DialogActions>
                    
                </DialogActions>
                
            </Dialog>
    </>
    )
}

export default CustomMenuItemDialog