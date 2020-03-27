import React from 'react'
import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.array,
};

export default MainLayout;
