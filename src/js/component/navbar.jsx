import React from 'react';


function NavBar(props) {
  var navTitulo = ""
 var navComponent1 = ""
 var navComponent2 = ""
 var navComponent3 = ""
 var navComponent4 = ""  


  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className='container'>
        <a className="navbar-brand text-light" href="#">{props.navTitulo}</a>
        <div className='ml-auto'>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav></>
  );
}

export default NavBar;