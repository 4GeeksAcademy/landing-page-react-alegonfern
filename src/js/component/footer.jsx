import React from 'react';

function Footer(props) {
var textFooter = ""
    return (
    <div className="container">
  <footer className="py-3 my-4 bg-secondary">
    
    <p className="text-center text-light">{props.textFooter}</p>
  </footer>
</div>
    );
  }

  export default Footer;

  