import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Post.module.scss';

export const Post = ({offer, match}) => {
  const { title, img, price, creationDate, content } = offer;
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.top}>
        <h3 className={styles.title}>{title} </h3>
        <button className={styles.edit}>Edytuj</button>
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
  offer: state.offer.offers[state.offer.offers.findIndex(offer => props.match.params.id = offer.id)],
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
