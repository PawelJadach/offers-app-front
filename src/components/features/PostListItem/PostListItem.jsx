import React from 'react'
import PropTypes from 'prop-types'
import styles from './PostListItem.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const PostListItem = ({ _id, title, price, photo, author, email }) => {
  return (
    <div className={styles.root}>
      <Link to={`/offer/${_id}`}>
        <div className={styles.img}>
          <img src={photo} alt={title}/>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3>{price} zł</h3>
            <p>{title}</p>
            <hr />
          </div>
          
          <div className={styles.buttons}>
            <button><i className="fas fa-cart-arrow-down"></i></button>
            <button><i className="fas fa-star"></i></button>
          </div>
          {email === author ? <Link to={`${process.env.PUBLIC_URL}/offer/edit/${_id}`}><button className={styles.edit}>Edytuj</button></Link> : null}
        </div>
      </Link>
    </div>
  )
}

PostListItem.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  photo: PropTypes.string,
  created: PropTypes.string,
  email: PropTypes.string,
  author: PropTypes.string,
};

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListItem)

