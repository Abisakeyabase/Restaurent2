import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav className='nav-container navbar navbar-expend-large p-0 '>
        <div className="col-2">
          <a href='http://localhost:3000/'>
        <img src={logo} alt='error' className='img' width={100}/>
        </a>
        </div>
        <button className='navbar-toggler' type='button'  data-bs-toggle="collapse" data-bs-target="#mynav">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className='col-6'></div>
        <div className='col-3 d-flex align-items-center p-4 collapse' id='mynav' style={{gap:'20px'}}>

                <Link to='/Foods' className=''>
                <button className='btn btn-outline-secondary'>Our Delecious</button>
                </Link>
                <Link to='/About' className=''>
                <button className='btn btn-outline-secondary'>About</button>
                </Link>
                
                
        </div>

    </nav>
  )
}

export default Nav