import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import banerimg1 from '../images/bannerimg4.png'
import banerimg2 from '../images/banerimg6.png'
import banerimg3 from '../images/banerimg3.webp'



const images=[
    {
        url: banerimg1,
    },
    {
        url: banerimg2
    },
    {
        url: banerimg3
    },
]
const divstyle={
    display:"flex",alignItems:"center",justifyContent:"center",height:"550px",backgroundSize:"cover"
}
const ImageSlider = () => {
  return (
    <div className='slide-container'>
        <Fade>
            {images.map((image,index)=>(
                <div key={index}>
                    <div style={{...divstyle,backgroundImage:`url(${image.url})`}}>
                    </div>
                </div>
            ))}
        </Fade>

    </div>
  )
}

export default ImageSlider