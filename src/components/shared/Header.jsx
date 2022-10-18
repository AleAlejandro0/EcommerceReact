import React from 'react'
import '../../home.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
   <header className='header'>
      
      <NavLink className='header__logo' to='/'>
         <h1>White</h1>
      </NavLink>
      

        <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                 <NavLink 
                    to='/login'><i className="fa-solid fa-user"></i>
                 </NavLink>
              </li>
              <li className="header__item">
                 <NavLink 
                    to='/purchases'><i className="fa-solid fa-box-open"></i>
                 </NavLink>
              </li>
              <li className="header__item">
                 <NavLink
                   to= '/cart'><i className="fa-brands fa-opencart"></i>
                 </NavLink>
              </li>
            </ul>
        </nav>

   </header> 
 )
}

export default Header