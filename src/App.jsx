import React from 'react';
import './styles/global.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { connect } from 'react-redux';
import { getFromStorage } from './redux/actions/authActions';
import { loadingPosts } from './redux/actions/postActions';

function App({getUserFromStorage, loadingPosts}) {
  getUserFromStorage();
  loadingPosts();
  return (
    <MainLayout />   
  );
}

const mapDispachToProps = dispatch => ({
  getUserFromStorage: () => (dispatch(getFromStorage())),
  loadingPosts: () => (dispatch(loadingPosts())),
}) 

export default connect(null, mapDispachToProps)(App);
