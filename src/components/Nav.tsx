import React from 'react'
import './css/Nav.css'

import kmutt_logo from '../assets/nav/ant_kmutt.png'

const Nav = () => {
  return (
    <>
      <div id='nav'>
        <div id='logo'>
          <img src={kmutt_logo} />
        </div>
        <div>
          <input type='text' id='search'></input>
        </div>
        <div>
          <div>
            <i className="bi bi-cart3"></i>
          </div>
          <div>
            <i className="bi bi-heart"></i>
          </div>
          <div>
            <i className="bi bi-person"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav