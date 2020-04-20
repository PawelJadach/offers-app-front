import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss';
import Hamburger from '../../common/Hamburger/Hamburger';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

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
    const navLinksLogged = [
      {
        name: 'Home',
        link: process.env.PUBLIC_URL + '/',
      },
      {
        name: 'My Offers',
        link: `${process.env.PUBLIC_URL}/my-offers`,
      },
      {
        name: 'Logout',
        link: process.env.PUBLIC_URL + '/',
      },
    ];

    const navLinksNotLogged = [
      {
        name: 'Home',
        link: process.env.PUBLIC_URL + '/',
      },
      {
        name: 'Login',
        link: process.env.PUBLIC_URL + '/login',
      },
    ];

    
    return (
      <nav className={this.state.menu ? `${styles.root} ${styles.show}` : styles.root}>
        <ul>
          <div className={styles.hamburger} onClick={this.showMenu} >
            <Hamburger checked={this.state.menu} click={this.showMenu}/>
          </div>
          {this.props.email !== '' ? 
            navLinksLogged.map(link => { return <li key={link.name}><Link to={link.link} onClick={this.handle}>{link.name}</Link></li>}) 
          : navLinksNotLogged.map(link => { return <li key={link.name}><Link to={link.link} onClick={this.handle}>{link.name}</Link></li>})
          }
        </ul>
      </nav>
    )
  }
}

Navbar.propTypes = {
  children: PropTypes.array,
};
const mapStateToProps = (state) => ({
  email: state.auth.user.email,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
