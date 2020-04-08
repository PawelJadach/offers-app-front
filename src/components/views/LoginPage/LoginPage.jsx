import React from 'react'
// import PropTypes from 'prop-types'
import styles from './LoginPage.module.scss';

class LoginPage extends React.Component {


  handleClick = e => {
    e.preventDefault();
    console.log('click');
  }


  render() {
    return (
      <div className={styles.root}>
        <button><i class="fab fa-google"></i>Sign in with google</button>
      </div>
    )
  }
}

// PostAdd.propTypes = {
//   children: PropTypes.array,
// };

export default LoginPage;
