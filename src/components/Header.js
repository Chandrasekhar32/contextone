import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

const Header = () => {
  return (
    <div>
     <span className='header'>React Context API</span>
     <ul className='nav'>
         <li className='prod'>
             <Link to="/">Usestate</Link>
         </li>
         <li className='prod1'>
             <Link to="/useeffect">UseEffect</Link>
         </li>
         <li className='prod1'>
             <Link to="/usecontext">Usecontext</Link>
         </li>
         <li className='prod1'>
             <Link to="/usereducer">UseReducer</Link>
         </li>
     </ul>
    </div>
  )
}

export default Header