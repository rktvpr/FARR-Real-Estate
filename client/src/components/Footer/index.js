import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 ARSS Real Estate</p>
          </div>
          <div className="col-md-6">
            <nav className="nav justify-content-end">
              <a className="nav-link" href="#">Terms of Use</a>
              <a className="nav-link" href="#">Privacy Policy</a>
              <a className="nav-link" href="#">Contact Us</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
