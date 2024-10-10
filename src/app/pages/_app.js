// pages/_app.js
import { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

// Make jQuery globally accessible
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $;  
}

const MyApp = ({ Component, pageProps }) => {
  

  return <Component {...pageProps} />;
};

export default MyApp;
