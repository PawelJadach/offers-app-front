import React from 'react'
import PropTypes from 'prop-types'

const PostAdd = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

PostAdd.propTypes = {
  children: PropTypes.array,
};

export default PostAdd;
