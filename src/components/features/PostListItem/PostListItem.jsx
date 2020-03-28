import React from 'react'
import PropTypes from 'prop-types'
import styles from './PostListItem.module.scss';

const PostListItem = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img src='https://magboss.pl/pubs/uploads/telefon-xiaomi-redmi-7a-2-16gb-czarny-nowy-global-version,abd86491701946fc9ba49c5f2f1146cf-nowt.jpg' />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>123 456,00 zł</h3>
          <p>Telefon apple Iphone</p>
          <hr />
        </div>
        
        <div className={styles.buttons}>
          <button><i class="fas fa-cart-arrow-down"></i></button>
          <button><i class="fas fa-star"></i></button>
        </div>
      </div>
    </div>
  )
}

PostListItem.propTypes = {
  children: PropTypes.array,
};

export default PostListItem;
