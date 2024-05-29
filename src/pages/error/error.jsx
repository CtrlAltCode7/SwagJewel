import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({ errorCode, errorMessage }) => {
  return (
    <div className="error-page">
      <h1>Error {errorCode}</h1>
      <p>{errorMessage}</p>
      <Link to="/">Go back to main index</Link>
    </div>
  );
}

export default Error;
