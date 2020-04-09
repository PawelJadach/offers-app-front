import React from 'react'
import styles from './MyOffers.module.scss';
import PostListItem from '../../features/PostListItem/PostListItem'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const MyOffers = ({offers, email}) => {
  const myOffers = offers.filter(offer => offer.authorEmail === email);
  console.log(offers, email)
  return (
    <div className={styles.root}>
      <div className={styles.button}><Link to='/addOffer'><button className={styles.btn}>Add offer</button></Link></div>
      {myOffers.map(offer => <PostListItem {...offer} key={offer.id}/>)}
    </div>
  )
}

MyOffers.propTypes = {
  offers: PropTypes.array,
}

const mapStateToProps = (state) => ({
  offers: state.offer.offers,
  email: state.auth.user.email,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOffers)

