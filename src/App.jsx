import React from 'react';
import './styles/global.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { connect } from 'react-redux';
import { getFromStorage } from './redux/actions/authActions';

function App({getUserFromStorage}) {
  getUserFromStorage();
  return (
    <MainLayout />   
  );
}

const mapDispachToProps = dispatch => ({
  getUserFromStorage: () => (dispatch(getFromStorage()))
}) 

export default connect(null, mapDispachToProps)(App);
