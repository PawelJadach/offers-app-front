import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss';
import Hamburger from '../../common/Hamburger/Hamburger';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUser } from '../../../redux/actions/authActions';
import {withRouter} from 'react-router-dom';

class Navbar extends Component {

  state = {
    menu: false
  };

  showMenu = () => {
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
  };

  handle = (e) => {
    this.setState({
      menu: false,
    })
    if(e.target.value === 0) {
      this.props.logoutUser();
      this.props.history.push('/login');
    }
  }

  
  render(){
    const navLinksLogged = [
      {
        name: 'Home',
        link:'/',
      },
      {
        name: 'My Offers',
        link: '/my-posts',
      },
      {
        name: 'Logout',
        link:'/',
      },
    ];

    const navLinksNotLogged = [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Login',
        link: '/login',
      },
    ];

    
    return (
      <nav className={this.state.menu ? `${styles.root} ${styles.show}` : styles.root}>
        <ul>
          <div className={styles.hamburger} onClick={this.showMenu} >
            <Hamburger checked={this.state.menu} click={this.showMenu}/>
          </div>
          {this.props.email !== '' ? 
            navLinksLogged.map(link => { 
              if(link.name === 'Logout') return <li className={styles.logout} key={link.name} onClick={this.handle}>{link.name}</li>
              return <li key={link.name}><Link to={link.link} onClick={this.handle}>{link.name}</Link></li>}) 
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

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
