import React from 'react'
import { AppBar , Box } from '@mui/material'
import BaseTab from '../reuzable-components/Tabs/BaseTab'


const Navbar = ({
    value,
    onChange
}) => {

    return (
        <AppBar
            position='static'
            sx={{
                background:'#26262A',
                display:'flex',
            }} 
        >
            <Box
                sx={{
                    height:'100%',
                    ml:5
                }}
            >
                <BaseTab 
                    value={value} 
                    onChange={onChange}
                    tabOptions={[{
                        label:'Posts'
                        },
                        {
                        label:'News'
                        },
                        {
                        label:'Main'
                        }
                ]} 
                />
            </Box>
            
        </AppBar>
    )
}

export default React.memo(Navbar)