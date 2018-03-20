import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/shared/Navbar.jsx';
import Footer from '../components/shared/Footer.jsx';
import Dashboard from '../components/shared/Dashboard.jsx';
import Landing from '../components/pages/landing/Landing.jsx';
import PostLanding from '../components/pages/landing/PostLanding.jsx'
import About from '../components/pages/moreinfo/About.jsx'
import Signup from '../components/pages/auth/Signup.jsx';
import Login from '../components/pages/auth/Login.jsx';
import Profile from '../components/pages/user/Profile.jsx';
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
  // state = {
  //   user: {
  //     loggedIn: false,
  //     creds: {}
  //   },
  //   search: '',
  //   videos: [],
  // }

  state = {
    user: {
      loggedIn: false,
      creds: {}
    },
    user: dummyData,
    search: '',
    videos: [],
  } 
  handleUpdateUser = (user) => {
    this.setState({
      user: {
        loggedIn: true,
        creds: user
      }
    });
  }

  handleLogoutUser = () => {
    // console.log('user logging out');
    axios.get('routes/logout');
    this.setState({
      user: {
        loggedIn: false,
        creds: {}
      }
    });
  }

  handleSearchInput = (query) => {
    // console.log('this is the search: ', query);
    axios.get(`routes/search/${query}`)
      .then((results) => {
        // console.log(results.data.data.items);
        let videos = results.data.data.items;
        this.setState({ search: query, videos: videos });
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
                path="/postlanding" 
                component={() => (<PostLanding
                  stateData={this.state}
                  handleSearchInput={this.handleSearchInput}
                />)} 
              />
              <Route
                path="/users/:id"
                render={(props) => (<Profile
                  userId={props}
                  user={this.state.user}
                  handleUpdateUser={this.handleUpdateUser}
                />)}
              />
              <Route path="/about" component={About} />
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
