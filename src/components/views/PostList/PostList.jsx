import React from 'react'
import styles from './PostList.module.scss';
import PostListItem from '../../features/PostListItem/PostListItem'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

class PostList extends React.Component {

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
        {posts.map(post => <PostListItem {...post} key={post._id}/>)}
      </div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array,
}

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  email: state.auth.user.email,
  loading: state.post.isLoading,
  error: state.post.error,
})


export default connect(mapStateToProps)(PostList)

