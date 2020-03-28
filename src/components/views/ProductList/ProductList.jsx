import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductList.module.scss';
import PostListItem from '../../features/PostListItem/PostListItem'; 

const ProductList = ({ children }) => {
  return (
    <div className={styles.root}>
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  )
}

ProductList.propTypes = {
  children: PropTypes.array,
};

export default ProductList;
