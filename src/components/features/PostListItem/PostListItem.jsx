import React from 'react'
import PropTypes from 'prop-types'
import styles from './PostListItem.module.scss';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, title, price, img, creationDate }) => {
  return (
    <div className={styles.root}>
      <Link to={`/offer/${id}`}>
        <div className={styles.img}>
          <img src={img} alt={title}/>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3>{price}$</h3>
            <p>{title}</p>
            <hr />
          </div>
          
          <div className={styles.buttons}>
            <button><i className="fas fa-cart-arrow-down"></i></button>
            <button><i className="fas fa-star"></i></button>
          </div>
        </div>
      </Link>
    </div>
  )
}

PostListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  creationDate: PropTypes.string,
};

export default PostListItem;
