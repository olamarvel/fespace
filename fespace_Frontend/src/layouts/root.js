import React from 'react';
import { Navbar } from '../component';
import { Footer } from '../container';

const Root = ({children}) => {
    return (
        <>
      <Navbar />
      {children}
      <Footer />
    </>
    );
}

export default Root;
