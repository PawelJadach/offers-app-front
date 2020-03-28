import React from 'react'
import PropTypes from 'prop-types'

const ProductList = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

ProductList.propTypes = {
  children: PropTypes.array,
};

export default ProductList;
