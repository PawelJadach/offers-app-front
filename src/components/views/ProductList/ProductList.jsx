import React from 'react'
import styles from './ProductList.module.scss';
import PostListItem from '../../features/PostListItem/PostListItem'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOffers } from '../../../redux/actions/offerActions';
import Loader from 'react-loader-spinner'

class ProductList extends React.Component {

  componentDidMount() {
    if(this.props.offers.length === 0)  this.props.fetchOffers();
  }

  render() {
    const { offers, email, loading, error } = this.props;

    if(loading) return ( 
      <div className={styles.center}>
        <Loader
          type="Grid"
          color="rgba(43, 45, 66, 1)"
          height={100}
          width={100}
        />
      </div>
    )
    
    else if (error !== '') return <div className={styles.root}>{error}</div>
    else return (
      <div className={styles.root}>
        {email !== '' ? <div className={styles.button}><Link to={process.env.PUBLIC_URL + '/addOffer'}><button className={styles.btn}>Add offer</button></Link></div> : null}
        {offers.map(offer => <PostListItem {...offer} key={offer.id}/>)}
      </div>
    )
  }
}

ProductList.propTypes = {
  offers: PropTypes.array,
}

const mapStateToProps = (state) => ({
  offers: state.offer.offers,
  email: state.auth.user.email,
  loading: state.offer.isLoading,
  error: state.offer.error,
})

const mapDispatchToProps = dispatch => ({
  fetchOffers: () => (dispatch(fetchOffers()))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

