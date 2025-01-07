import React from 'react';
import img1 from '../images/waffle-cookies-home.jpg';
import img2 from '../images/mandhibiriyanihome.jpg';
import img3 from '../images/brownihome.jpg';
import rservetable from '../images/table1.jpg';

const Home = () => {
  return (
    <section style={{ backgroundColor: 'rgba(235, 117, 147, 0.13)', padding: '20px' }}>
      {/* ------------all time favorite---- */}
      <div className='container' style={{ backgroundColor: 'white', marginTop: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <i className='bx bx-star bx-tada' style={{ fontSize: '38px', marginTop: '30px', padding: '10px', color: 'rgba(255, 183, 0, 0.76)' }}></i>
          <h1 style={{ fontSize: '28px', marginTop: '30px', padding: '10px', fontWeight: '800' }}>ALL TIME FAVORITES</h1>
          <i className='bx bx-happy-heart-eyes bx-tada' style={{ fontSize: '38px', marginTop: '30px', padding: '10px', color: 'rgba(255, 0, 0, 0.76)' }}></i>
        </div>
        <hr style={{ width: '70%', marginLeft: '15%' }} />

        {/* ----------image----- */}
        <div className='row' style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
          <div className='home-fav-food col-12 col-md-4' style={{ padding: '10px',marginTop:'70px' }}>
            <img src={img1} style={{ width: '100%', height: 'auto' }} />
            <p className='text-center' style={{ fontSize: '18px', fontWeight: '900', padding: '3px' }}>Waffle Cookies</p>
          </div>
          <div className='home-fav-food col-12 col-md-4' style={{ padding: '10px',marginTop:'10px' }}>
            <img src={img2} style={{ width: '100%', height: 'auto' }} />
            <p className='text-center' style={{ fontSize: '18px', fontWeight: '900', padding: '3px' }}>Mandhi Biriyani</p>
          </div>
          <div className='home-fav-food col-12 col-md-4' style={{ padding: '10px',marginTop:'70px' }}>
            <img src={img3} style={{ width: '100%', height: 'auto' }} />
            <p className='text-center' style={{ fontSize: '18px', fontWeight: '900', padding: '3px' }}>Chocolate Brownie</p>
          </div>
        </div>
        <div className='row d-flex justify-content-center p-3'>
          <a href='http://localhost:3000/Foods' className='col-4 col-md-2 btn btn-danger'>View menu</a>
        </div>
      </div>

      {/* -----------------reserve table------- */}
      <div className='container' style={{ marginTop: '30px', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <i className='bx bx-calendar-heart bx-tada' style={{ fontSize: '28px', marginTop: '30px', padding: '10px', color: 'rgba(11, 72, 109, 0.88)' }}></i>
          <h1 style={{ fontSize: '28px', marginTop: '30px', padding: '10px', fontWeight: '800' }}>RESERVE A TABLE</h1>
          <i className='bx bx-restaurant bx-fade-right' style={{ fontSize: '28px', marginTop: '30px', padding: '10px', color: 'rgba(42, 36, 39, 0.77)' }}></i>
        </div>
        <hr style={{ width: '70%', marginLeft: '15%' }} />
        <div className='row' style={{ marginTop: '10px', padding: '30px' }}>
          {/* --------image div...... */}
          <div className='col-12 col-md-7 p-3'>
            <img src={rservetable} style={{ width: '100%', height: 'auto' }} />
          </div>
          {/* --------form div---------  */}
          <div className='col-12 col-md-5 p-3' style={{ backgroundColor: 'rgba(237, 221, 229, 0.12)', border: '1px solid rgba(0, 0, 0, 0.14)' }}>
            <div>
              <h1 className='text-center' style={{ width: '50%', marginLeft: '25%', fontSize: '24px', fontWeight: '900', color: 'rgb(221, 100, 73)' }}>Save Your Spot, Savor the Moment</h1>
            </div>
            <div>
              <p className='text-center' style={{ width: '70%', marginLeft: '15%', fontSize: '16px', fontWeight: '300', color: 'rgb(35, 30, 29)' }}>
                To help us find the best table for you, select the preferred party size, date, and time of your reservation.
              </p>
            </div>
            <div style={{ padding: '5px', textAlign: 'center' }}>
              <label className='label p-2'>Select party size</label>
              <select className='form-select' aria-label='Default select example' style={{ width: '60%', padding: '5px', marginLeft: '20%',cursor:'pointer' }}>
                <option value='1'>1 guest</option>
                <option value='2'>2 guest</option>
                <option value='3' selected>
                  3 guest
                </option>
                <option value='4'>4 guest</option>
                <option value='5'>5 guest</option>
                <option value='6'>6 guest</option>
              </select>
            </div>
            <div style={{ padding: '5px', textAlign: 'center' }}>
              <label className='label p-2' for='datepicker'>
                Select a Date:
              </label>
              <input type='text' id='datepicker' className='form-control' placeholder='Choose a date' style={{ width: '60%', padding: '5px', marginLeft: '20%',cursor:'pointer' }} />
            </div>
            <div style={{ padding: '5px', textAlign: 'center' }}>
              <label className='label p-2'>Time</label>
              <select className='form-select' aria-label='Default select example' style={{ width: '60%', padding: '5px', marginLeft: '20%',cursor:'pointer' }}>
                <option value='1' selected>
                  8:00 AM
                </option>
                <option value='2'>8:30 AM</option>
                <option value='3'>9:00 AM</option>
                <option value='4'>9:30 AM</option>
                <option value='5'>10:00 AM</option>
                <option value='6'>10:30 AM</option>
                <option value='7'>11:00 AM</option>
                <option value='8'>11:30 AM</option>
                <option value='9'>12:00 AM</option>
              </select>
            </div>
            <div style={{ padding: '5px', textAlign: 'center' }}>
              <button className='btn btn-danger' style={{ width: '50%', padding: '5px', marginLeft: '25%' }}>
                Find a Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
