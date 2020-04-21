import React from 'react'
// import PropTypes from 'prop-types'
import styles from './LoginPage.module.scss';
import { loginUser } from '../../../redux/actions/authActions';
import { connect } from 'react-redux';

class LoginPage extends React.Component {


  handleClick = e => {
    e.preventDefault();
    this.props.loginUser('pawel123@wp.pl')
  }


  render() {
    return (
      <div className={styles.root}>
        <button onClick={this.handleClick}><i class="fab fa-google"></i>Sign in with google</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = (dispatch) => ({
  loginUser: email => dispatch(loginUser(email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
