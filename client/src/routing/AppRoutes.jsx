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
  //   savedVideos: dummySavedVideosData
  // }

  //////////////////////////
  ///// ACTUAL STATE ///////
  //////////////////////////
  
  state = {
    launch: true,
    user: {
      loggedIn: false,
      creds: {}
    },
    editUser: {
      edit: false,
      editButton: 'Edit',
    },
    videos: [],
    selectedVideo: null,
    saved: false,
    savedVideos: null,
    theme: 'theme-gecho'
  }

  // Show dashboard after moving form landing page
  handleShowDash = () => this.state.launch ? this.setState({ launch: false }) : null;

  // Check sessionStorage if user is logged in or not
  // handleCheckSession = (session) => {
  //   if (session && this.state.user.loggedIn !== session.loggedIn) {
  //     this.setState({ user: session, launch: false });
  //   }
  // }

  // handleUpdateUser = (user) => {
  //   // Only change if user object contains a username
  //   if (user.username) {
  //     this.setState({
  //       user: {
  //         loggedIn: true,
  //         creds: user
  //       }
  //     });
  //     sessionStorage.setItem('session', JSON.stringify(this.state.user)); // set sessionStorage for log in
  //   }
  // }

  handleUpdateAvatar = (img) => {
    this.setState({
      user: {
        loggedIn: this.state.user.loggedIn,
        creds: { ...this.state.user.creds, img: img }
      }
    });
  }

  // handleLogoutUser = () => {
  //   console.log('user logging out');
  //   axios.get('routes/logout');
  //   this.setState({
  //     user: {
  //       loggedIn: false,
  //       creds: {}
  //     }
  //   });
  //   sessionStorage.removeItem('session'); // set sessionStorage for logout
  // }

  handleUpdateAfterDelete = () => {
    this.setState({
      user: {
        loggedIn: false,
        creds: {}
      }
    });
    sessionStorage.removeItem('session');
    window.location.reload(); // reload page to reset state
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

  handleLikedVideo = (e, video) => {
    // console.log('liked video: ', video);
    if (this.state.user.loggedIn) {
      // console.log('Logged in, proceed...', this.state.user.creds);
      let id = this.state.user.creds._id;
      axios.post(`/routes/user/${id}/videos`, video)
      	.then((results) => {
      		let videos = results.data.videos;
      		// console.log('new video data: ', videos);
      	})
      	.catch((err) => {
      		console.log('There was an error: ', err);
      	});
    } else {
      console.log('Not logged in');
    }
  }

  retrieveSavedVideos = () => {
		// console.log('retrieve button clicked', this.state);
		let id = this.state.user.creds._id;
		let videos = {};
		if (!this.state.saved) {
			axios.get(`/routes/user/${id}/videos`)
				.then((results) => {
					videos = results.data.videos;
					// console.log('new video data: ', videos);
					this.setState({ saved: true, savedVideos: videos });
				})
				.catch((err) => {
					console.log('There was an error: ', err);
				});
		} else {
			this.setState({ saved: false });
		}
  }
  
  handleUpdateSavedVideos = (videos) => {
    this.setState({ saved: true, savedVideos: videos });
  }

  handleUpdateTheme = (theme) => this.setState({ theme });

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Navbar
            theme={this.state.theme}
          />
          <div className={this.state.theme}>
            <div className="main-page">
              <Dashboard 
                launch={this.state.launch}
                retrieveSavedVideos={this.retrieveSavedVideos}
                handleUpdateTheme={this.handleUpdateTheme}
                handleCheckSession={this.handleCheckSession}
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
                      handleLikedVideo={this.handleLikedVideo}
                      handleShowDash={this.handleShowDash}
                  />)} 
                />
                <Route
                  exact path="/user/:id"
                  render={(props) => (<Profile
                    editUser={this.state.editUser}
                    handleUpdateAfterDelete={this.handleUpdateAfterDelete}
                    handleUpdateAvatar={this.handleUpdateAvatar}
                    handleUpdateTheme={this.handleUpdateTheme}
                    handleShowDash={this.handleShowDash}
                    retrieveSavedVideos={this.retrieveSavedVideos}
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
                    state={this.state}
                    videos={this.state.savedVideos}
                    retrieveSavedVideos={this.retrieveSavedVideos}
                    handleUpdateSavedVideos={this.handleUpdateSavedVideos}
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
          <Footer theme={this.state.theme}/>
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