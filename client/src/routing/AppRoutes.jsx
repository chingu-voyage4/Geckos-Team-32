import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/shared/Navbar.jsx';
import Footer from '../components/shared/Footer.jsx';
import Dashboard from '../components/shared/Dashboard.jsx';
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
  //////////////////////////
  /////// SEED DATA ////////
  //////////////////////////

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
    search: '',
    videos: [],
    selectedVideo: null,
    saved: false,
    savedVideos: null,
    theme: 'theme-gecho'
  }

  // Show dashboard after moving form landing page
  handleShowDash = () => this.state.launch ? this.setState({ launch: false }) : null;

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

  handleUpdateAvatar = (img) => {
    this.setState({
      user: {
        loggedIn: this.state.user.loggedIn,
        creds: { ...this.state.user.creds, img: img }
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
            user={this.state.user}
            handleLogoutUser={this.handleLogoutUser}
            theme={this.state.theme}
          />
          <div className={this.state.theme}>
            <div className="main-page">
              <Dashboard 
                state={this.state}
                retrieveSavedVideos={this.retrieveSavedVideos}
                handleUpdateTheme={this.handleUpdateTheme}
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
                    path="/search" 
                    component={() => (<Search
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
                    userId={props}
                    state={this.state}
                    handleUpdateAfterDelete={this.handleUpdateAfterDelete}
                    handleUpdateUser={this.handleUpdateUser}
                    handleUpdateAvatar={this.handleUpdateAvatar}
                    handleShowDash={this.handleShowDash}
                    retrieveSavedVideos={this.retrieveSavedVideos}
                    handleEditProfile={req => {
                      !this.state.editUser.edit ? 
                      this.setState({ editUser: { edit: true, editButton: 'Cancel' }}) : 
                      this.setState({ editUser: { edit: false, editButton: 'Edit Profile' }});
                      this.handleUpdateUser(req);
                    }}
                  />)}
                />
                <Route 
                  exact path="/user/:id/saved"
                  render={(props) => (<SavedVideos 
                    userId={props}
                    videos={this.state.savedVideos}
                    retrieveSavedVideos={this.retrieveSavedVideos}
                    handleUpdateSavedVideos={this.handleUpdateSavedVideos}
                  />)}
                />
                <Route 
                  exact path="/user/:id/playlist"
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
                    launch={this.state.launch} 
                    handleHideDash={this.handleHideDash}
                  />} 
                />
                <Route 
                  path="/login" 
                  component={(props) => <Login 
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

export default AppRoutes;
