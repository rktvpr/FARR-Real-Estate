import React from 'react';


import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 ARSS Real Estate</p>
          </div>
          <div className="col-md-6">
            <nav className="nav justify-content-end">
              <a className="nav-link" href="#" style={{ textDecoration: 'none' }}>Terms of Use  </a>
              <a className="nav-link" href="#" style={{ textDecoration: 'none' }}>Privacy Policy  </a>
              <a className="nav-link" href="#" style={{ textDecoration: 'none' }}>Contact Us</a>
            </nav>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;

