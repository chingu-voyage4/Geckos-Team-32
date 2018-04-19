import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found page-wrapper nodash">
    <h2><span>404 Error!</span> Page not found.</h2>
    <Link to="/">Go to Homepage</Link>
  </div>
);

export default NotFound;