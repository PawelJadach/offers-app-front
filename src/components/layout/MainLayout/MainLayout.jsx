import React from 'react'
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProductList from '../../views/ProductList/ProductList';
import ErrorPage from '../../views/ErrorPage/ErrorPage';
import PostAdd from '../../views/PostAdd/PostAdd';
import LoginPage from '../../views/LoginPage/LoginPage';
import Post from '../../views/Post/Post';
import MyOffers from '../../views/MyOffers/MyOffers';
import OfferEdit from '../../views/OfferEdit/OfferEdit';
import { connect } from 'react-redux'

const MainLayout = ({ email, offers }) => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <PrivateRoute email={email} exact path='/addOffer' component={PostAdd} />
          <PrivateRoute email={email} exact path='/my-offers' component={MyOffers} />
          <PrivateRouteLogin email={email} exact path='/login' component={LoginPage} />
          <Route exact path='/offer/:id' component={Post} />
          <PrivateRouteEdit email={email} offers={offers} exact path='/offer/edit/:id' component={OfferEdit} />
          <Route exact path='*'  component={ErrorPage} />
        </Switch>
      </Router>
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

const PrivateRouteEdit = ({ email, offers, computedMatch, component: Component, ...rest }) => {


if(email === '' || offers[offers.findIndex(offer => Number(computedMatch.params.id) === offer.id)].authorEmail !== email ) 
return (
    <Route {...rest} render={(props) => ( <Redirect to='/error' /> )}/>
  )

else return <Route {...rest} render={(props) => ( <Component {...props} /> )}/>
}


const mapStateToProps = (state) => ({
  email: state.auth.user.email,
  offers: state.offer.offers,
})


export default connect(mapStateToProps)(MainLayout)
