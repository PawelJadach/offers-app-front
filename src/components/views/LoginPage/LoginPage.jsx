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
        <div class={styles.googleBtn} onClick={this.handleClick}>
          <div class={styles.googleIconWrapper}>
            <img class={styles.googleIcon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          </div>
          <p class={styles.btnText}><b>Sign in with google</b></p>
        </div>
      </div>
    )
  }
}

// PostAdd.propTypes = {
//   children: PropTypes.array,
// };

export default LoginPage;
