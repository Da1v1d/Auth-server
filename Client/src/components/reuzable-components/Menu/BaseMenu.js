import React from 'react'
import {Menu , MenuItem,} from '@mui/material'


const BaseMenu = ({
    menuOptions
}) => {


    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {menuOptions.map((menu , index ) =>(
                <MenuItem 
                    key={index} 
                >
                    
                </MenuItem>
            ))}
        </Menu>
    )
}

export default BaseMenu
