import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Post.module.scss';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from '../../../constants/constants';
import Loader from 'react-loader-spinner'

class Post extends React.Component {

  state = {
    post: null,
    isFetching: true,
  };


  componentDidMount(){
    Axios
    .get(`${API_URL}/posts/${this.props.match.params.id}`)
    .then(res => {
      if(res.status === 200){
        this.setState({
          isFetching: false,
          post: res.data
        })
      }
    })
  }

  makeDateString = (date) => {
    console.log(date)
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  render(){

    if(this.state.isFetching) return ( 
      <div className={styles.center}>
        <Loader
          type="Grid"
          color="rgba(43, 45, 66, 1)"
          height={100}
          width={100}
        />
      </div>
    )
    else {
    const { title, photo, price, created, text, author, _id } = this.state.post;
    const date = new Date(created);
    return (
      <div className={styles.root}>
        <div className={styles.left}>
          <div className={styles.top}>
          <h3 className={styles.title}>{title} </h3>
          {this.props.email === author ? <Link to={`${process.env.PUBLIC_URL}/post/edit/${_id}`}><button className={styles.edit}>Edytuj</button></Link> : null}
          <p>Wystawiono: {this.makeDateString(date)}</p>
          </div>
          
          <p>{text}</p>
          <button>{price}$</button>
        </div>
        <div className={styles.right}>
          <div className={styles.img}><img src={photo} alt={title}/></div>
        </div>
      </div>
    )}
  }
}

Post.propTypes = {
  post: PropTypes.object
}

const mapStateToProps = (state, props) => ({
  post: state.post.posts[state.post.posts.findIndex(post => props.match.params.id === post._id)],
  email: state.auth.user.email,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
