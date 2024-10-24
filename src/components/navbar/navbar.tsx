import { useState } from 'react'
import './navbar.css'

import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import guy from '../../assets/guy.jpg';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h1>Eumag</h1>
        </div>

        <div className='middle'>
            <IoSearch className='icon'/>
            <a href='#' className='bold'>New Releases</a>
            <a href='#'>New feed</a>
            <a href='#'>Shuffle Play</a>
        </div>

        <div className='account'>
            <img src={guy} alt='guy' />
            <h3>John Doe</h3>
            <IoMenu className='icon'/>
        </div>
    </div>
  )
}

export default Navbar
