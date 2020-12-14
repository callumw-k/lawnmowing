import React from 'react';
import Navbar from "./Navbar"
import 'normalize.css';
import GlobalStyles from "./globals/GlobalStyles"
import Typography from "./globals/Typography"
import Footer from "./Footer"

export default function({children}) {
  return(
    <React.Fragment>
      <GlobalStyles />
      <Typography/>
        <Navbar />
        {children}
        <Footer/>
    </React.Fragment>
  );
}