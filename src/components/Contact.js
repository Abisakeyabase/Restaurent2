import React from 'react'

const Contact = () => {
    return (
        <section style={{marginTop:'100px'}}>
            {/* -------------sec1-----------------   */}
            <div className='container-fluid' style={{ backgroundColor: 'rgba(235, 117, 147, 0.18)', padding: '30px' }}>
                <div className='row text-center'>
                    <div className='col-12'>
                        <h1 style={{ padding: '20px' }}>Let's Connect</h1>
                        <p style={{ width: '100%', maxWidth: '550px', margin: '0 auto', fontSize: '15px' }}>
                            Whether you have a question, need assistance, or simply want to share your thoughts, our team is always ready to help
                        </p>
                    </div>
                </div>
            </div>

            {/* -------------sec2--------- */}
            <div style={{ backgroundColor: 'rgba(235, 117, 147, 0.01)' }}>
                <div className='container'>
                    <div className='row'>
                        {/* --------------form---- */}
                        <div className='col-12 col-md-5 text-center' style={{ marginTop: '40px', padding: '20px' }}>
                            <div className='d-flex justify-content-center mt-3'>
                                <input className='form-control' type='text' placeholder='Enter Your Name' style={{ width: '100%' }} />
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <input className='form-control' type='text' placeholder='Enter Your Email' style={{ width: '100%' }} />
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <textarea className='form-control' type='text' placeholder='Text..' style={{ width: '100%' }} />
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <button className='btn btn-primary' style={{ width: '30%' }}>Send</button>
                            </div>
                        </div>

                        {/* -----------------line------------ */}
                        <div className='col-12 col-md-2 d-flex justify-content-center align-items-center' style={{ marginTop: '40px', padding: '20px' }}>
                            <div style={{ border: '1px solid rgba(0, 0, 0, 0.15)', color: 'black', backgroundColor: 'black', height: '300px' }}></div>
                        </div>

                        {/* -------------address------- */}
                        <div className='col-12 col-md-5 d-flex flex-wrap justify-content-center align-items-center' style={{ marginTop: '40px', padding: '20px' }}>
                            <div style={{ width: '180px', padding: '15px', height: '130px' }}>
                                <i className='bx bxs-map bx-flashing' style={{ padding: '3px', fontSize: '20px' }}></i>
                                <h1 style={{ fontSize: '22px', fontWeight: '400', padding: '3px' }}> Address</h1>
                                <p style={{ color: 'rgba(0, 0, 0, 0.71)', fontSize: '14px' }}>Kudil Restaurant, Tenkasi</p>
                            </div>
                            <div style={{ width: '180px', padding: '15px', height: '130px' }}>
                                <i className='bx bxs-phone-call bx-tada' style={{ padding: '3px', fontSize: '20px' }}></i>
                                <h1 style={{ fontSize: '22px', fontWeight: '400', padding: '3px' }}>Phone</h1>
                                <p style={{ fontSize: '14px' }}>
                                    <a href='tel:+919080553984' style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.71)' }}>+91 90805 53984</a>
                                </p>
                            </div>
                            <div style={{ width: '180px', padding: '15px', height: '130px' }}>
                                <i className='bx bxs-envelope bx-tada' style={{ padding: '3px', fontSize: '20px' }}></i>
                                <h1 style={{ fontSize: '22px', fontWeight: '400', padding: '3px' }}>Email</h1>
                                <p style={{ fontSize: '12px' }}>
                                    <a href="mailto:abisakeyabase962@gmail.com?subject=Inquiry&body=Hello%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                                        style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.71)' }}>abisakeyabase962@gmail.com</a>
                                </p>
                            </div>
                            <div style={{ width: '180px', padding: '15px', height: '130px' }}>
                                <i className='bx bxs-like bx-fade-left' style={{ padding: '3px', fontSize: '20px' }}></i>
                                <h1 style={{ fontSize: '22px', fontWeight: '400', padding: '3px' }}>Follow</h1>
                                <p style={{ color: 'rgba(0, 0, 0, 0.71)', fontSize: '22px' }}>
                                    <i className='bx bxl-facebook' style={{ padding: '3px' }}></i>
                                    <i className='bx bxl-twitter' style={{ padding: '3px' }}></i>
                                    <i className='bx bxl-instagram-alt' style={{ padding: '3px' }}></i>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ----------map---------------- */}
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.0799849599016!2d77.43796547449834!3d8.964777389992019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04270b570d6521%3A0xd931af5aea7c5303!2sVV%20kudil%20restaurant!5e0!3m2!1sen!2sin!4v1735882393026!5m2!1sen!2sin"
                            style={{ width: '100%', height: '300px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            title='Kudil Restaurant'></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
