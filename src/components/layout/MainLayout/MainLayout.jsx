import React from 'react'
import Navbar from '../Navbar/Navbar';
import {  Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import PostList from '../../views/PostList/PostList';
import ErrorPage from '../../views/ErrorPage/ErrorPage';
import PostAdd from '../../views/PostAdd/PostAdd';
import LoginPage from '../../views/LoginPage/LoginPage';
import Post from '../../views/Post/Post';
import MyPosts from '../../views/MyPosts/MyPosts';
import OfferEdit from '../../views/OfferEdit/OfferEdit';
import { connect } from 'react-redux'

const MainLayout = ({ email, posts }) => {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={PostList} />
          {/* <Route exact path={process.env.PUBLIC_URL + '/#/'} component={PostList}> <Redirect to={process.env.PUBLIC_URL + '/#/' + process.env.PUBLIC_URL} /></Route> */}
          <PrivateRoute email={email} exact path={process.env.PUBLIC_URL + '/addOffer'} component={PostAdd} />
          <PrivateRoute email={email} exact path={process.env.PUBLIC_URL + '/my-posts'} component={MyPosts} />
          <PrivateRouteLogin email={email} exact path={process.env.PUBLIC_URL + '/login'} component={LoginPage} />
          <Route exact path={process.env.PUBLIC_URL + '/offer/:id'} component={Post} />
          <PrivateRouteEdit email={email} posts={posts} exact path={process.env.PUBLIC_URL + '/post/edit/:id'} component={OfferEdit} />
          <Route exact path='*'  component={ErrorPage} />
        </Switch>
      </HashRouter>
    </div>
  )
}

const PrivateRoute = ({ email, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    email !== ""
      ? <Component {...props} />
      : <Redirect to='/error' />
  )} />
)

const PrivateRouteLogin = ({ email, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    email === ""
      ? <Component {...props} />
      : <Redirect to='/error' />
  )} />
)

const PrivateRouteEdit = ({ email, posts, computedMatch, component: Component, ...rest }) => {


if(email === '' || posts[posts.findIndex(post => Number(computedMatch.params.id) === post.id)].authorEmail !== email ) 
return (
    <Route {...rest} render={(props) => ( <Redirect to='/error' /> )}/>
  )

else return <Route {...rest} render={(props) => ( <Component {...props} /> )}/>
}


const mapStateToProps = (state) => ({
  email: state.auth.user.email,
  posts: state.post.posts,
})


export default connect(mapStateToProps)(MainLayout)
