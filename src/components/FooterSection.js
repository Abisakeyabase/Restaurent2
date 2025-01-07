import React from 'react'
import logo from '../images/logo.png'

const FooterSection = () => {
  return (
    <footer className='footer-cont'>
    <div className='foo-row container'>
    <div className='row d-flex'>
      <div className='foo-img col'>
        <img src={logo}/>

      </div>
      <div className='col'>
        <div className='footer-terms'>
            <h1>Terms and Policy</h1>
            <ul>
                <li><a>Terms condition</a></li>
                <li><a>Policy</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a><a>History</a></a></li>
            </ul>   
        </div>
      </div>
      <div className='col' style={{display:'block'}}>
        <div className='footer-rev'>
            <h1>Review Here</h1>
            <input type='text' className='form-control' placeholder='Enter your E-mail'></input>
            <textarea type='text' className='form-control' rows={4} placeholder='Give your honorable Review Here..' style={{marginTop:'7px'}}></textarea>
            <div className='d-flex justify-content-end mt-2 me-2'>
            <button className='btn btn-success mt-2 d-flex justify-content-end'>Submit</button>
            </div>

        </div>
        <h1>Contact Here</h1>

        <div className='footer-con'>
        <i class='bx bxl-instagram'style={{background: 'linear-gradient(to right, #f9ce34, #ee2a7b,#6228d7)'}}></i>
        <i class='bx bxl-facebook-circle' style={{background:'linear-gradient(120deg, #3b5998, #5c6c91)'}}></i>
        <i class='bx bxl-gmail' style={{background:'linear-gradient(120deg, #6f1616, #642525)'}}></i>

        </div>

      </div>
    </div>
    </div>
    <div className='footer-copy'>
        <h1 className=''>Copyright © 2010-2025 Kudil Restaurant. All rights reserved.</h1>
    </div>
  </footer>
  )
}

export default FooterSection