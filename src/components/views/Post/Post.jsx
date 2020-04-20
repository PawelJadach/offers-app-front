import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Post.module.scss';
import { Link } from 'react-router-dom';

export const Post = ({offer, email}) => {
  const { title, img, price, creationDate, content, authorEmail, id } = offer;
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.top}>
        <h3 className={styles.title}>{title} </h3>
        {email === authorEmail ? <Link to={`${process.env.PUBLIC_URL}/offer/edit/${id}`}><button className={styles.edit}>Edytuj</button></Link> : null}
        <p>Wystawiono: {creationDate}</p>
        </div>
        
        <p>{content}</p>
        <button>{price}$</button>
      </div>
      <div className={styles.right}>
        <div className={styles.img}><img src={img} alt={title}/></div>
      </div>
    </div>
  )

 
}

Post.propTypes = {
  offer: PropTypes.object
}

const mapStateToProps = (state, props) => ({
  offer: state.offer.offers[state.offer.offers.findIndex(offer => Number(props.match.params.id) === offer.id)],
  email: state.auth.user.email,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
