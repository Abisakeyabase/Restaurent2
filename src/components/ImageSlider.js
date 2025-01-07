import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import bimg1 from '../images/bimg-1.avif'
import bimg5 from '../images/bimg5.jpg'
import bimg6 from '../images/bimg6.jpg'
import bimg7 from '../images/b-img6.jpg'
import bimg8 from '../images/bimg7.jpg'
import bimg9 from '../images/bimg8.jpg'


// 1234789
const images=[
    {
        url: bimg1,
    },
    {
        url: bimg5
    },
    {
        url: bimg6
    },
    {
        url: bimg7
    },
    {
        url: bimg8
    },
    {
        url: bimg9
    },
]

const ImageSlider = () => {
    
  return (
    <div className='slide-container'>
        <Slide>
            {images.map((image,index)=>(
                <div key={index}>
                    <div style={{width:'100%',height:'70vh',marginTop:'100px',overflow:'hidden'}} className='s-c'>
                        <img src={image.url} style={{width:'100%',height:'100%',objectFit:'cover'}}></img>
                    </div>
                </div>
            ))}
        </Slide>

    </div>
  )
}

export default ImageSlider