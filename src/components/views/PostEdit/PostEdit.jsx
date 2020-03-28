import React from 'react'
import PropTypes from 'prop-types'

const PostEdit = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

PostEdit.propTypes = {
  children: PropTypes.array,
};

export default PostEdit;
