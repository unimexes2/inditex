import React from 'react';
import '../../css/errorpage.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">418</h1>
      <p className="error-message"> I'm a teapot </p>
      <p className="error-message">
        {' '}
        It seems that CORS proxy is broken again{' '}
      </p>
    </div>
  );
};

export default ErrorPage;
