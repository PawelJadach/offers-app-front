import React from 'react'
import styles from './ProductList.module.scss';
import PostListItem from '../../features/PostListItem/PostListItem'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadingPosts } from '../../../redux/actions/postActions';
import Loader from 'react-loader-spinner'

class ProductList extends React.Component {

  componentDidMount() {
    if(this.props.posts.length === 0)  this.props.loadingPosts();
  }

  render() {
    const { posts, email, loading, error } = this.props;

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
        {email !== '' ? <div className={styles.button}><Link to={process.env.PUBLIC_URL + '/addOffer'}><button className={styles.btn}>Add post</button></Link></div> : null}
        {posts.map(post => <PostListItem {...post} key={post.id}/>)}
      </div>
    )
  }
}

ProductList.propTypes = {
  posts: PropTypes.array,
}

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  email: state.auth.user.email,
  loading: state.post.isLoading,
  error: state.post.error,
})

const mapDispatchToProps = dispatch => ({
  loadingPosts: () => (dispatch(loadingPosts()))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

