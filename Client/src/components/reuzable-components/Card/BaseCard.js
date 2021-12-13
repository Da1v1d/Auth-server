import { Card, CardContent, Paper, Typography } from '@mui/material'
import React from 'react'

const BaseCard = ({
    children,
    name,
    lastname,
    ...props
}) => {
    
    const paperStyles ={
        width:'13%',
        minWidth:'200px',
        height:'125px',
        mt:5,
        mx:5,
        color:'black',
        background:'#F5F5F5',
        borderRadius:"10px",
        '&:hover':{
            cursor:'pointer',
        }
    }

    return (
        <Card
            {...props}
            sx={paperStyles}
        >
            <CardContent>
                <Typography variant='h5' component='div' sx={{fontWeight:'600'}}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {lastname}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default React.memo(BaseCard)