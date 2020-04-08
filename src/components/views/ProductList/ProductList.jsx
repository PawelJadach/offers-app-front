import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductList.module.scss';
import PostListItem from '../../features/PostListItem/PostListItem'; 
import { Link } from 'react-router-dom';

const ProductList = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.button}><Link to='/addOffer'><button className={styles.btn}>Add offer</button></Link></div>
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
