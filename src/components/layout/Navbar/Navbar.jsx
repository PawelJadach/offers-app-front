import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss';
import Hamburger from '../../common/Hamburger/Hamburger';

class Navbar extends Component {

  state = {
    menu: false
  };

  showMenu = () => {
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
  };

  handle = () => {
    this.setState({
      menu: false,
    })
  }

  
  render(){
    const navLinks = ['Home', 'Offers', 'Login', 'Logout'];
    return (
      <nav className={this.state.menu ? `${styles.root} ${styles.show}` : styles.root}>
        <ul>
          <div className={styles.hamburger} onClick={this.showMenu} >
            <Hamburger checked={this.state.menu} />
          </div>
          {navLinks.map(link => {
            return <li><a href="#" onClick={this.handle}>{link}</a></li>
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
