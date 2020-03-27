import React from 'react'
import './Hamburger.module.scss';

const Hamburger = ({ checked, click }) => {
  return (
    <div id='hamburger'>
      <input onClick={click} type="checkbox" checked={checked}/>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}


export default Hamburger;
