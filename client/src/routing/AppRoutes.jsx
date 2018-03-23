import React from 'react';
import { connect } from 'react-redux';
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

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  state = {
    user: {
      loggedIn: false,
      creds: {}
    },
    editUser: {
      edit: false,
      editButton: 'Edit',
    },
    search: '',
    videos: [],
    selectedVideo: null
  }

  handleUpdateUser = (user) => {
    // Only change if user object contains a username
    if (user.username) {
      this.setState({
        user: {
          loggedIn: true,
          creds: user
        }
      });
    }
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

  handleUpdateAfterDelete = () => {
    this.setState({
      user: {
        loggedIn: false,
        creds: {}
      }
    });
  }

  handleSearchInput = (query) => {
    // console.log('this is the search: ', query);
    axios.get(`routes/yt/search/${query}`)
      .then((results) => {
        // console.log(results.data);
        let videos = results.data.data.items;
        this.setState({ search: query, videos: videos, selectedVideo: null });
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
                  handleSelectedVideo={selectedVideo => this.setState({selectedVideo})}
                />)} 
              />
              <Route
                path="/user/:id"
                render={(props) => (<Profile
                  userId={props}
                  state={this.state}
                  handleUpdateAfterDelete={this.handleUpdateAfterDelete}
                  handleUpdateUser={this.handleUpdateUser}
                  handleEditProfile={req => {
                    !this.state.editUser.edit ? 
                    this.setState({ editUser: { edit: true, editButton: 'Cancel' }}) : 
                    this.setState({ editUser: { edit: false, editButton: 'Edit' }});
		                this.handleUpdateUser(req);
                  }}
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

const mapStateToProps = (state) => {
  return { 
    auth: state.user
  };
};

export default (connect(mapStateToProps)(AppRoutes));