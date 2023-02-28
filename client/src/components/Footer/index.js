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
              <a className="nav-link" href="#">Terms of Use  </a>
              <a className="nav-link" href="#">Privacy Policy  </a>
              <a className="nav-link" href="#">Contact Us</a>
            </nav>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
>>>>>>> 9dc5e8e2410b1ef601fbaa6473c982c323ece890
