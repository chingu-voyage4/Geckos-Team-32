import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import Dashboard from '../components/layout/Dashboard.jsx';
import Home from '../components/pages/landing/Home.jsx';
import Search from '../components/pages/landing/Search.jsx';
import PlayVideo from '../components/pages/landing/PlayVideo.jsx';
import About from '../components/pages/moreinfo/About.jsx';
import Signup from '../components/pages/auth/Signup.jsx';
import Login from '../components/pages/auth/Login.jsx';
import Profile from '../components/pages/user/Profile.jsx';
import SavedVideos from '../components/pages/user/SavedVideos.jsx';
import Playlist from '../components/pages/user/Playlist.jsx';
import NotFound from './NotFound.jsx';
import ScrollToTop from './ScrollToTop.jsx';


// Seed Data
import { dummyUserData, dummySavedVideosData } from '../seedData/seedData';

class AppRoutes extends React.Component {
  ////////////////////////
  ///// SEED DATA ////////
  ////////////////////////

  // state = {
  //   launch: true,
  //   user: dummyUserData,
  //   editUser: {
  //     edit: false,
  //     editButton: 'Edit',
  //   },
  //   search: '',
  //   videos: [],
  //   selectedVideo: null,
  //   saved: true,
  //   savedVideos: dummySavedVideosData,
  //   theme: 'theme-good-vibes'
  // }

  //////////////////////////
  ///// ACTUAL STATE ///////
  //////////////////////////
  
  state = {
    launch: true,
    editUser: {
      edit: false,
      editButton: 'Edit',
    },
    videos: [],
    selectedVideo: null,
    theme: 'theme-gecho'
  }

  // Show dashboard after moving form landing page
  handleShowDash = () => this.state.launch ? this.setState({ launch: false }) : null;

  handleUpdateAvatar = (img) => {
    this.setState({
      user: {
        loggedIn: this.state.user.loggedIn,
        creds: { ...this.state.user.creds, img: img }
      }
    });
  }

  handleSearchInput = (query) => {
    // console.log('this is the search: ', query);
    axios.get(`routes/yt/search/${query}`)
      .then((results) => {
        // console.log(results.data);
        let videos = results.data.data.items;
        this.setState({ videos: videos, selectedVideo: null });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Navbar
            theme={this.props.auth.creds.theme || 'theme-gecho'}
          />
          <div className={this.props.auth.creds.theme || 'theme-gecho'}>
            <div className="main-page">
              <Dashboard 
                launch={this.state.launch}
                handleCheckSession={this.handleCheckSession}
                handleShowDash={this.handleShowDash}
              />
              <Switch>
                <Route
                  exact path="/"
                  component={() => (<Home
                    launch={this.state.launch}
                    search={this.state.search}
                    handleSearchInput={this.handleSearchInput}
                    />)}
                    />
                    <Route 
                    path="/search/:id" 
                    render={(props) => (<Search
                      userId={props}
                      stateData={this.state}
                      handleSearchInput={this.handleSearchInput}
                      handleSelectedVideo={selectedVideo => this.setState({selectedVideo})}
                      handleShowDash={this.handleShowDash}
                  />)} 
                />
                <Route
                  exact path="/user/:id"
                  render={(props) => (<Profile
                    userId={props}
                    editUser={this.state.editUser}
                    handleUpdateAvatar={this.handleUpdateAvatar}
                    handleShowDash={this.handleShowDash}
                    handleEditProfile={req => {
                      !this.state.editUser.edit ? 
                      this.setState({ editUser: { edit: true, editButton: 'Cancel' }}) : 
                      this.setState({ editUser: { edit: false, editButton: 'Edit Profile' }});
                    }}
                  />)}
                />
                <Route 
                  exact path="/user/:id/saved"
                  render={(props) => (<SavedVideos 
                    userId={props}
                  />)}
                />
                <Route 
                  exact path="/user/:id/playlists"
                  render={() => <Playlist/>}
                />
                <Route 
                  path="/about" 
                  component={(props) => <About launch={this.state.launch}/>}
                />
                <Route path="/playvideo" component={PlayVideo} />
                <Route 
                  path="/signup" 
                  component={(props) => <Signup 
                    userId={props}
                    launch={this.state.launch} 
                    handleHideDash={this.handleHideDash}
                  />} 
                />
                <Route 
                  path="/login" 
                  component={(props) => <Login
                    userId={props}
                    launch={this.state.launch} 
                    handleHideDash={this.handleHideDash}
                  />} 
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer theme={this.props.auth.creds.theme || 'theme-gecho'}/>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    auth: state.auth
  };
};

export default (connect(mapStateToProps)(AppRoutes));