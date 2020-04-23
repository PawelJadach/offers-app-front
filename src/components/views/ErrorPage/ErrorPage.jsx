import React from 'react'
import styles from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className={styles.root}>
      <div>
        <h1>Error 404 - Page not Found</h1>
        <p>Page not found. Let us help guide you out and get you back home.</p>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}


export default ErrorPage;
