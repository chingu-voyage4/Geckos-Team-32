import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/shared/Navbar.jsx';
import Footer from '../components/shared/Footer.jsx';
import Dashboard from '../components/shared/Dashboard.jsx';
import Landing from '../components/pages/landing/Landing.jsx';
import PostLanding from '../components/pages/landing/PostLanding.jsx'
import Signup from '../components/pages/auth/Signup.jsx';
import Login from '../components/pages/auth/Login.jsx';
import Profile from '../components/pages/auth/Profile.jsx';
import NotFound from './NotFound.jsx';

// Used for client side testing
// Uncomment top 'state' below and comment out bottom 'state' before pushing!
const dummyData = {
  loggedIn: true,
  creds: {
    _id: 'f93jafb1fvn39dba1e5a1c2d83',
    __v: 0,
    username: 'KentuckyKid309'
  }
}

class AppRoutes extends React.Component {
	state = {
    user: {
      loggedIn: false,
      creds: {}
    },
    search: '',
    videos: [],
  }

	// state = {
  //   user: dummyData,
  //   search: '',
  //   videos: [],
  //   selectedVideo:null
  // }

  handleUpdateUser = (user) => {
    this.setState({
      user: {
        loggedIn: true,
        creds: user
      }
    });
  }

  handleLogoutUser = () => {
    console.log('user logging out');
    axios.get('routes/logout');
    this.setState({
      user: {
        loggedIn: false,
        creds: {}
      }
    });
  }
  
  handleSearchInput = () => {
    axios.get('routes/searchthis')
      .then((results) => {
        console.log(results)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar 
            user={this.state.user} 
            handleLogoutUser={this.handleLogoutUser}
            />
          <div className="main-page">
            <Dashboard user={this.state.user} />
            <Switch>
              <Route 
                exact path="/" 
                component={() => (<Landing 
                  search={this.state.search}
                  handleSearchInput={this.handleSearchInput}
                />)} 
              />
              <Route
                path="/users/:id"
                render={(props) => (<Profile
                  userId={props}
                  handleUpdateUser={this.handleUpdateUser}
                />)}
              />
              <Route 
                path="/postlanding" 
                component={() => (<PostLanding
                  stateData={this.state}
                  handleSearchInput={this.handleSearchInput}
                />)} 
              />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRoutes;
