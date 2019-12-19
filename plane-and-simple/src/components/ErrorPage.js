import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-message"> Sorry that page never returned from a trip to the Bermuda Triangle </h1>
      <Link to="/">Return to Home Page</Link>
    </div>
  )
}
export default ErrorPage