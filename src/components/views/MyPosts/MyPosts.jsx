import React from 'react'
import styles from './MyPosts.module.scss';
import PostListItem from '../../features/PostListItem/PostListItem'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const MyPosts = ({posts, email}) => {
  const myPosts = posts.filter(post => post.author === email);
  return (
    <div className={styles.root}>
      <div className={styles.button}><Link to={'/addOffer'}><button className={styles.btn}>Add post</button></Link></div>
      {myPosts.map(post => <PostListItem {...post} key={post._id}/>)}
    </div>
  )
}

MyPosts.propTypes = {
  posts: PropTypes.array,
}

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  email: state.auth.user.email,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)

