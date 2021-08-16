import React from 'react';
import Sticky from 'react-sticky-el';
import Header from '../Header/Header';

const Layout: React.FC = ({ children }) => (
  <>
    <Sticky>
      <Header />
    </Sticky>
    <main>{children}</main>
  </>
);

export default Layout;
