import React from 'react'
import PropTypes from 'prop-types'
import styles from './PostListItem.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const PostListItem = ({ id, title, price, img, creationDate, authorEmail, email }) => {
  return (
    <div className={styles.root}>
      <Link to={`/offer/${id}`}>
        <div className={styles.img}>
          <img src={img} alt={title}/>
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
          {email === authorEmail ? <Link to={`/offer/edit/${id}`}><button className={styles.edit}>Edytuj</button></Link> : null}
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
  email: PropTypes.string,
  authorEmail: PropTypes.string,
};

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListItem)

