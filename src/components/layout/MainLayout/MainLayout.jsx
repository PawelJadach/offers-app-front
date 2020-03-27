import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      { children }
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.array,
};

export default MainLayout;
