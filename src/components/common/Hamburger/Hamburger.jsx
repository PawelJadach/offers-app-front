import React from 'react'
import styles from './Hamburger.module.scss';

const Hamburger = ({ checked }) => {
  return (
    <div id={styles.hamburger}>
      <input type="checkbox" checked={checked}/>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}


export default Hamburger;
