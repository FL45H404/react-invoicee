import React from 'react'
import {useSelector} from 'react-redux'
import { useNavigate ,Link} from 'react-router-dom'
import {isLogin} from '../features/Slice'
import {auth} from "../Firebase"
function Header() {
  const navigate=useNavigate();
  const isUser=useSelector(isLogin)
  const logout=()=>{
      auth.signOut()
      navigate('/login')
      
  }
  return (
    <div className='header'>
      <div className="navbar">
        <div className="leftmenu">
          <ul>
            <li><Link to="/">HOME</Link></li>
          </ul>
        </div>
        <div className="rightmenu">
          <ul>
            {isUser ? <li><a href="/" onClick={()=>logout()}>LOGOUT</a></li>:<li><Link to="/">LOGIN</Link></li>}
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header