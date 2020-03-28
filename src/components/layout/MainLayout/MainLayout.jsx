import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from '../../views/ProductList/ProductList';
import ErrorPage from '../../views/ErrorPage/ErrorPage';

const MainLayout = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='*'  component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  )
}



export default MainLayout;
