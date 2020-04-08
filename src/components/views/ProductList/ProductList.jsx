import React from 'react'
import styles from './ProductList.module.scss';
import PostListItem from '../../features/PostListItem/PostListItem'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const ProductList = ({ offers }) => {
  return (
    <div className={styles.root}>
      <div className={styles.button}><Link to='/addOffer'><button className={styles.btn}>Add offer</button></Link></div>
      {offers.map(offer => <PostListItem {...offer} key={offer.id}/>)}
    </div>
  )
}

ProductList.propTypes = {
  offers: PropTypes.array,
}

const mapStateToProps = (state) => ({
  offers: state.offer.offers,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

