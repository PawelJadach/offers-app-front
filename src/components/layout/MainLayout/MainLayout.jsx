import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from '../../views/ProductList/ProductList';
import ErrorPage from '../../views/ErrorPage/ErrorPage';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path='/' exact component={ProductList} />
        <Route component={ErrorPage} />
        { children }
      </Router>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.array,
};

export default MainLayout;
