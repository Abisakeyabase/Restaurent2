import React from 'react'
import '../App.css'
import abt from '../images/abt-img1.jpg'
import locate from '../images/location.jpg'




const Content = () => {
  return (
    <section className='container border border-secondary '>
      <div className='abt-row'>
        <div className='abt-col'>
          <img src={abt} className='' alt='error' />
        </div>
        <div className='col-8 card'>
          <h1 className='card-title p-2' style={{ color: 'green' }}>KUDIL RESTAURANT</h1>
          <h1 className='card-text' style={{ fontSize: 16, color: 'gray' }}><span className='ms-4'></span>Whether you're dining with family, catching up with friends, or celebrating a special occasion, our inviting ambiance provides the perfect setting. At Kudil Restaurant, we pride ourselves on creating unforgettable moments through food, service, and atmosphere.</h1>
        </div>
      </div>
      <h1 className='col d-flex justify-content-center mt-4'>Location</h1>
      <div className='row d-flex justify-content-center'>
        <div className='abt-col-2'>
          <img src={locate} className='' alt='error' />
        </div>
        <div className='col-6 card mt-4 ms-2'>
          <h1 className='card-title p-3'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.0799849599016!2d77.43796547449834!3d8.964777389992019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04270b570d6521%3A0xd931af5aea7c5303!2sVV%20kudil%20restaurant!5e0!3m2!1sen!2sin!4v1735882393026!5m2!1sen!2sin" style={{ width: 600, height: 300, border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title='Kudil Restaurant'></iframe>
          </h1>
        </div>
      </div>
    </section>
  )
}


export default Content