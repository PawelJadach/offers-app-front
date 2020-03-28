import React from 'react'
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.root}>
      <div>
        <h1>Error 404 - Page not Found</h1>
        <p>Page not found. Let us help guide you out and get you back home.</p>
        <a href="#">Home</a>
      </div>
    </div>
  )
}


export default ErrorPage;
