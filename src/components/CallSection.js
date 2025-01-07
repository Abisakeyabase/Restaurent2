import React from 'react'

const CallSection = () => {
    return (

        <div className='callsec-row'>
            <div className='callsec-col1' style={{padding:'5PX',backgroundColor:'white',borderRadius:'50%'}}>
                <a  href="https://wa.me//919345331718?text=More%info%about%new%collection%please"
                >
                <i class='bx bxl-whatsapp'></i>

                </a>
            
                {/* <a href="https://wa.me/919345331718?text=Hello%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                    target="_blank" 
                    rel="noopener noreferrer">
                <i class='bx bxl-whatsapp'></i>
                </a> */}
            </div>
            <div className='callsec-col2'>
                <a href='tel:+919080553984'>
                    <i class='bx bx-phone-call bx-tada' ></i>
                </a>
            </div>
        </div>

    )
}

export default CallSection