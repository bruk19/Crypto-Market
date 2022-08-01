import React from 'react'
import { TiMicrophone } from 'react-icons/ti';
import { MdSettings } from 'react-icons/md';
import logo from '../Assets/logo.png'

const Nav = () => {
  return (
    <>
    <header>
    <div className='logo'>
      <img src={logo} alt='crypto market'></img>
      <span>Crypto</span>
    </div>
    <div className='feature'>
      <TiMicrophone />
      <MdSettings />
    </div>
    </header>
    </>
  )
}

export default Nav;