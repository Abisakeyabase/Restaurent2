import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg p-0 fixed-top z-index-10' style={{backgroundColor:'rgb(255, 255, 255)'}}>
      <div className="container-fluid">
        {/* ---------logo sec------- */}
        <div className="col-6 col-md-3">
          <a href='http://localhost:3000/'>
            <img src={logo} alt='Logo' className='img-fluid' width={100} />
          </a>
        </div>

        {/* ---------toggle mobile device------------ */}
        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#mynav">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* -----------router section----- */}
        <div className='collapse navbar-collapse justify-content-end' id='mynav'>
          <div className='navbar-nav'>
            <Link to='/Foods' className='nav-link'>
              <button className='btn btn-outline-secondary'>Our Delicious</button>
            </Link>
            <Link to='/About' className='nav-link'>
              <button className='btn btn-outline-secondary'>About</button>
            </Link>
            <Link to='/Contact' className='nav-link'>
              <button className='btn btn-outline-secondary'>Contact Us</button>
            </Link>   
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
