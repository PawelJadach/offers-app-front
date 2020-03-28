import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

Post.propTypes = {
  children: PropTypes.array,
};

export default Post;
