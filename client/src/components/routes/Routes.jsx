import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import Dashboard from '../shared/Dashboard.jsx';
import Landing from '../pages/landing/Landing.jsx';
import Signup from '../pages/auth/Signup.jsx';
import Login from '../pages/auth/Login.jsx';
import NotFound from './NotFound.jsx';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <div className="main-page">
        <Dashboard />
        <Switch>
          <Route exact path="/" component={Landing} />
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