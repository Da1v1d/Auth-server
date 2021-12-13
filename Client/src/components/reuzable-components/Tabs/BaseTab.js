import React from 'react'
import {Tabs, Tab } from '@mui/material'


const BaseTab = ({
    value,
    onChange,
    tabOptions
}) => {

    const tabStyles = {
        '&.MuiTab-textColorPrimary':{
            color:'white'
        },
        '&.Mui-selected':{
            color:"white"
        }
    }
    console.log('aaaa')


    return (
        <Tabs
            value={value}
            onChange={onChange}
        >
            {tabOptions.map((tab, index)=>
                <Tab  
                    key={index} 
                    label={tab.label} 
                    sx={tabStyles}
                />
            )}
        </Tabs>
    )
}

export default React.memo(BaseTab)