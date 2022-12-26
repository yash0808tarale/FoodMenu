import React from 'react';
import loade from '../images/loader.gif'

const Loader = () => {
    function loader() {
        document.querySelector('.loader-container').classList.add('fade-out');
      }
    
      function fadeOut() {
        setInterval(loader, 3000);
      }
    
      window.onload = fadeOut;
  return (
    <div className="loader-container">
          <img src={loade} alt="loader" />
    </div>
  )
}

export default Loader
