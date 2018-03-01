import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/shared/Navbar.jsx';
import Footer from '../components/shared/Footer.jsx';
import Dashboard from '../components/shared/Dashboard.jsx';
import Landing from '../components/pages/landing/Landing.jsx';
import PostLanding from '../components/pages/landing/PostLanding.jsx'
import Signup from '../components/pages/auth/Signup.jsx';
import Login from '../components/pages/auth/Login.jsx';
import NotFound from './NotFound.jsx';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <div className="main-page">
        <Dashboard />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/postlanding" component={PostLanding} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
)

export default Routes;