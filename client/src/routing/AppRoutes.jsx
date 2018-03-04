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
import NotFound from './NotFound.jsx';


class AppRoutes extends React.Component {
	state = {
    search: '',
    videos: [],
  }
  
  handleSearchInput = (term) => {
    const API_KEY = '';

    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${term}&maxResults=9&topicId=/m/04rlf`)
      .then((results) => {
        // console.log('this is the data: ', results.data.items);
        this.setState({
          search: term,
          videos: results.data.items,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="main-page">
            <Dashboard />
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
