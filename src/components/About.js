import React from 'react'
import oldimg1 from '../images/old-res1.avif';
import oldimg2 from '../images/old-res2.avif';
import oldimg3 from '../images/old-res3.jpg';
import oldimg4 from '../images/old-res4.webp';


const About = () => {
  return (
    <section className='container' style={{marginTop:'250px'}}>
      <div className='row d-flex' style={{position:'relative'}}>
        <div className='col-6' style={{position:'absolute',width:'50%',top:'-100px',left:'200px'}}>
          <img src={oldimg3} style={{width:'80%',filter:'grayscale(100%)'}}></img>
        </div>
        <div className='col-6 d-flex justify-content-end' style={{width:'100%',height:'400px',backgroundColor:'rgba(235, 117, 147, 0.18)'}}>
          <div className='col-4' style={{marginTop:'50px',marginRight:'40px',border:'1px solid black'}}>
            <h1>OUR HISTORY</h1>
            <h2>Serving Biryani To Customers</h2>
            <p>No dreamer is ever too small, no dream ever too big. Salem RR has come a long way. There are older restaurants and places with cooler backstories maybe, but for nearly 20 plus years, everyone in Chennai and beyond, young and old, is familiar with ‘Salem RR Biryani’. The early days were tougher times, but Mr. RR Tamilselvan single-handedly made ‘Empire’ possible and together with his family he ran the business with grit and fervour.
Exotic food like biryani and chickens were served, and also affordable price. They consistently built rapport, making each interaction with customers unique; such was their passion, a sure winner all the way</p>
          </div>
        </div>
      </div>

      <div className='row d-flex' style={{position:'relative',marginTop:'150px'}}>
        <div className='col-6' style={{position:'absolute',width:'50%',top:'-100px',left:'200px'}}>
          <img src={oldimg2} style={{width:'60%',filter:'grayscale(100%)'}}></img>
        </div>
        <div className='col-6 d-flex justify-content-end' style={{width:'100%',height:'400px',backgroundColor:'rgba(235, 117, 147, 0.18)'}}>
          <div className='col-4' style={{marginTop:'50px',marginRight:'40px',border:'1px solid black'}}>
            <h1>OUR HISTORY</h1>
            <h2>Serving Biryani To Customers</h2>
            <p>No dreamer is ever too small, no dream ever too big. Salem RR has come a long way. There are older restaurants and places with cooler backstories maybe, but for nearly 20 plus years, everyone in Chennai and beyond, young and old, is familiar with ‘Salem RR Biryani’. The early days were tougher times, but Mr. RR Tamilselvan single-handedly made ‘Empire’ possible and together with his family he ran the business with grit and fervour.
Exotic food like biryani and chickens were served, and also affordable price. They consistently built rapport, making each interaction with customers unique; such was their passion, a sure winner all the way</p>
          </div>
        </div>
      </div>

      <div className='row d-flex' style={{position:'relative',marginTop:'100px'}}>
        <div className='col-6' style={{position:'absolute',width:'50%',top:'-50px',left:'200px'}}>
          <img src={oldimg4} style={{width:'60%'}}></img>
        </div>
        <div className='col-6 d-flex justify-content-end' style={{width:'100%',height:'400px',backgroundColor:'rgba(235, 117, 147, 0.18)'}}>
          <div className='col-4' style={{marginTop:'50px',marginRight:'40px',border:'1px solid black'}}>
            <h1>OUR HISTORY</h1>
            <h2>Serving Biryani To Customers</h2>
            <p>No dreamer is ever too small, no dream ever too big. Salem RR has come a long way. There are older restaurants and places with cooler backstories maybe, but for nearly 20 plus years, everyone in Chennai and beyond, young and old, is familiar with ‘Salem RR Biryani’. The early days were tougher times, but Mr. RR Tamilselvan single-handedly made ‘Empire’ possible and together with his family he ran the business with grit and fervour.
Exotic food like biryani and chickens were served, and also affordable price. They consistently built rapport, making each interaction with customers unique; such was their passion, a sure winner all the way</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About