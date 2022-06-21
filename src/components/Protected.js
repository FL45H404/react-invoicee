import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'
import {useLocation} from 'react-router'
import { useSelector } from 'react-redux'
import { isLogin } from '../features/Slice'
function Protected() {
    const location=useLocation()
    const isAuth=useSelector(isLogin)

  return isAuth ? <Outlet/> : <Navigate to='/login' replace state={{from: location}}/>
}

export default Protected