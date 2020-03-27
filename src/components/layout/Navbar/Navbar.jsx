import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss';
import Hamburger from '../../common/Hamburger/Hamburger';

class Navbar extends Component {

  state = {
    menu: false,
    checked: false,
  };

  showMenu = () => {
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
  };

  checked = () => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
      menu: false,
    }));
  };
  
  render(){
    const navLinks = ['Home', 'Offers', 'Login', 'Logout'];
    console.log(this.state.checked)
    return (
      <nav className={this.state.menu ? styles.root + ' ' + styles.show : styles.root}>
        <ul>
          <div className={styles.hamburger} onClick={this.showMenu} >
            <Hamburger checked={this.state.checked} click={this.checked}/>
          </div>
          {navLinks.map(link => {
            return <li><a href="#" onClick={this.checked}>{link}</a></li>
          })}
        </ul>
      </nav>
    )
  }
}

Navbar.propTypes = {
  children: PropTypes.array,
};

export default Navbar;
