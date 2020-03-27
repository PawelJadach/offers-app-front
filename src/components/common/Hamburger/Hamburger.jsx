import React from 'react'
import './Hamburger.module.scss';

const Hamburger = ({ checked }) => {
  return (
    <div id='hamburger'>
      <input type="checkbox" checked={checked}/>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}


export default Hamburger;
