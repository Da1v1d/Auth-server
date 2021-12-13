import React from 'react'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { routeUrls } from '../../Routes/routeUrls'


const AccesControl = ({children}) => {
    const history = useHistory()
    const [isLogined , setIsLogined] = useState(false)
    const { accesToken } = useSelector(state=>state.userReducer)
    const AccesToken = localStorage.getItem('accesToken')

    useLayoutEffect(()=>{
        if (AccesToken) {
            setIsLogined(true)
        }
    },[AccesToken])


    if(!isLogined){
        history.push(routeUrls.Login)
    }

    return (
        [children]
    )
}

export default AccesControl