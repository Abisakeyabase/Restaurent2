import React from 'react'
import '../App.css'
import five from '../images/rb_2933.png'
import star from '../images/stars.png'
import pic1 from '../images/starratedpic2.avif'
import panipoori from '../images/panipoori.webp'
import samos from '../images/Samosa-recipe-1-1.jpg'
import samosa1 from '../images/samosa4.jpg'
import corn from '../images/corn1.jpg'
import Biriyani from '../images/biriyani.jpg'
import naan from '../images/naan.jpg'
import dosa from '../images/dosa.jpg'
import grill from '../images/grill.jpg'
import cake from '../images/cake1.jpg'
import juice from '../images/cold-lemon-kiwi-drink-table.jpg'
import browni from '../images/chocolate-cake.jpg'
import ice from '../images/ice3.png'




const Foods = () => {
  return (
    <section className='container'>
      <div className='star-con'>
        <div className='star-row'>
          <img src={star} className='' />
          <div className='star-col'>
            <img src={five} />
          </div>
        </div>
      </div>
     
      {/* --------sec 2---- */}
      <h1 className='text-center' style={{ color: '',backgroundColor:'rgb(255, 235, 53)', width:'50%', marginTop:'50px',marginLeft:'25%', borderRadius:'20px 50px 40px',padding:'3px'}}>We are specialized with this menu's</h1>

      <div className='srate-row row'>

        <div className='srate-col col-6'>
          <img src={pic1}></img>
        </div>
        <div className='srate-col2 col'>
          <p><i class='bx bxs-star bx-flashing' ></i><i class='bx bxs-star bx-flashing' ></i><i class='bx bxs-star bx-flashing' ></i><i class='bx bxs-star bx-flashing' ></i><i class='bx bxs-star bx-flashing' ></i></p>
          <h1 className='text-center'>Star Rated Foods</h1>
          <div className='starters'>
          <h1 className='text-center' style={{ color: 'black',backgroundColor:'rgb(255, 235, 53)', width:'50%',marginLeft:'25%', borderRadius:'20px 50px 40px',padding:'3px'}}>Starter's</h1>
            <ul>
              <li><i class='bx bxs-star bx-fade-left' ></i>Pani Poori</li>
              <li><i class='bx bxs-star bx-fade-left' ></i>Samosa</li>
              <li><i class='bx bxs-star bx-fade-left' ></i>Sweet corn</li>
            </ul>
          </div>
          <div className='maincourse'>
          <h1 className='text-center' style={{ color: 'black',backgroundColor:'rgb(255, 235, 53)', width:'50%',marginLeft:'25%', borderRadius:'20px 50px 40px',padding:'3px'}}>Main Couse</h1>
            <ul>
              <li><i class='bx bxs-star bx-fade-left' ></i>Mandhi Biriyani</li>
              <li><i class='bx bxs-star bx-fade-left' ></i>Naan</li>
              <li><i class='bx bxs-star bx-fade-left' ></i>Gee Dosai</li>
              <li><i class='bx bxs-star bx-fade-left' ></i>Chicken Grill</li>
            </ul>
          </div>

          <div className='desert'>
          <h1 className='text-center' style={{ color: 'black',backgroundColor:'rgb(255, 235, 53)', width:'50%', marginLeft:'25%', borderRadius:'20px 50px 40px',padding:'3px'}}>Dessert's</h1>
            <ul>
              <li><i class='bx bxs-star bx-fade-left' ></i>Cake</li>
              <li><i class='bx bxs-star bx-fade-left' ></i>Juice</li>
              <li><i class='bx bxs-star bx-fade-left' ></i>Browni</li>
            </ul>
          </div>

        </div>
      </div>
      {/* ----sec3-- */}
      {/* ------------------------starters------------- */}
      <div className='row d-flex justify-content-center text-center'style={{marginTop:'50px'}}>
      <h1 className='col text-center' style={{ color: 'black',backgroundColor:'rgba(255, 114, 53, 0.61)', width:'50%', borderRadius:'20px 90px 40px 70px',padding:'3px'}}>Starter's</h1>
      </div>
      {/* ----------paanipuri-------------- */}
      
      <div className='srate-sec3 row'>
        <div className='srate-sec3col col-3'>
          <img src={panipoori} />
        </div>
        <div className='srate-sec3col2 col-9 card' style={{backgroundColor:' #ee2a7c15'}}>
          <h1>PaaniPuri</h1>
          <h2><span>Incrediants :</span>puris, boiled chickpeas or potatoes, chutneys, spices, and chopped onions</h2>
          <h3><span>Description :</span> a popular Indian street food snack that consists of a hollow, crispy shell filled with a flavorful mixture of potatoes, chickpeas, and spices, and then topped with a sweet, sour, and spicy flavored water</h3>
        </div>

      </div>
      {/* --------------------samosa--------------- */}
      <div className='srate-sec3-1 row'>
        <div className='srate-sec3col2-1 col-9 card' style={{backgroundColor:' #242dd71e'}}>
          <h1>Samosa</h1>
          <h2><span>Incrediants :</span>All-purpose flour, Salt, Carrom Seeds, Ghee, Oil, Water</h2>
          <h3><span>Description :</span> Samosas are a popular snack or appetizer in many regions of the world, including South Asia, Southeast Asia, and parts of Africa.</h3>
        </div>
        <div className='srate-sec3col-1 col-3'>
          <img src={samosa1} />
        </div>

      </div>
           {/* ----------corn-------------- */}
           <div className='srate-sec3 row'>
        <div className='srate-sec3col col-3'>
          <img src={corn} />
        </div>
        <div className='srate-sec3col2 col-9 card' style={{backgroundColor:' rgb(231, 216, 163)'}}>
          <h1>Corn Chat</h1>
          <h2><span>Incrediants :</span>corn chat masala recipe, onion, tomato, green chilies, coriander leaves, cumin powder, chat masala, Lemon juice</h2>
          <h3><span>Description :</span> Corn Chat Masala features tender, sweet corn kernels tossed with a medley of chopped onions, tomatoes, and green chilies, elevating the dish with vibrant colors and crunch.</h3>
        </div>

      </div>

  {/* -------------------Main course------------- */}
  <div className='row d-flex justify-content-center text-center'style={{marginTop:'50px'}}>
  <h1 className='col text-center' style={{ color: 'black',backgroundColor:'rgba(255, 114, 53, 0.61)', width:'50%', borderRadius:'20px 90px 40px 70px',padding:'3px'}}>Main Couse</h1>
      </div>
      {/* ------------Grill------------ */}
      <div className='srate-sec3-1 row'>
        <div className='srate-sec3col2-1 col-9 card' style={{backgroundColor:'rgba(36, 149, 215, 0.12)'}}>
          <h1>Chicken Grill</h1>
          <h2><span>Incrediants :</span>All-purpose flour, Salt, Carrom Seeds, Ghee, Oil, Water</h2>
          <h3><span>Description :</span> Samosas are a popular snack or appetizer in many regions of the world, including South Asia, Southeast Asia, and parts of Africa.</h3>
        </div>
        <div className='srate-sec3col-1 col-3'>
          <img src={grill} />
        </div>

      </div>

       {/* ----------Biriyani-------------- */}
      
       <div className='srate-sec3 row'>
        <div className='srate-sec3col col-3'>
          <img src={Biriyani} />
        </div>
        <div className='srate-sec3col2 col-9 card' style={{backgroundColor:'rgba(146, 42, 238, 0.25)'}}>
          <h1>Mandhi Biriyani</h1>
          <h2><span>Incrediants :</span>puris, boiled chickpeas or potatoes, chutneys, spices, and chopped onions</h2>
          <h3><span>Description :</span> a popular Indian street food snack that consists of a hollow, crispy shell filled with a flavorful mixture of potatoes, chickpeas, and spices, and then topped with a sweet, sour, and spicy flavored water</h3>
        </div>

      </div>
      {/* --------------------Naan--------------- */}
      <div className='srate-sec3-1 row'>
        <div className='srate-sec3col2-1 col-9 card' style={{backgroundColor:'rgba(36, 215, 66, 0.31)'}}>
          <h1>Naan Roast</h1>
          <h2><span>Incrediants :</span>All-purpose flour, Salt, Carrom Seeds, Ghee, Oil, Water</h2>
          <h3><span>Description :</span> Samosas are a popular snack or appetizer in many regions of the world, including South Asia, Southeast Asia, and parts of Africa.</h3>
        </div>
        <div className='srate-sec3col-1 col-3'>
          <img src={naan} />
        </div>

      </div>
           {/* ----------Gee dosa-------------- */}
           <div className='srate-sec3 row'>
        <div className='srate-sec3col col-3'>
          <img src={dosa} />
        </div>
        <div className='srate-sec3col2 col-9 card' style={{backgroundColor:' rgba(73, 123, 96, 0.29)'}}>
          <h1>Ghee Dosa</h1>
          <h2><span>Incrediants :</span>corn chat masala recipe, onion, tomato, green chilies, coriander leaves, cumin powder, chat masala, Lemon juice</h2>
          <h3><span>Description :</span> Corn Chat Masala features tender, sweet corn kernels tossed with a medley of chopped onions, tomatoes, and green chilies, elevating the dish with vibrant colors and crunch.</h3>
        </div>

      </div>

      {/* -------------------Deserts------------- */}
  <div className='row d-flex justify-content-center text-center'style={{marginTop:'50px'}}>
  <h1 className='col text-center' style={{ color: 'black',backgroundColor:'rgba(255, 114, 53, 0.61)', width:'50%', borderRadius:'20px 90px 40px 70px',padding:'3px'}}>Dessert's</h1>
      </div>
      {/* ------------cake------------ */}
      <div className='srate-sec3-1 row'>
        <div className='srate-sec3col2-1 col-9 card' style={{backgroundColor:'rgba(36, 149, 215, 0.12)'}}>
          <h1>Cake</h1>
          <h2><span>Incrediants :</span>All-purpose flour, Salt, Carrom Seeds, Ghee, Oil, Water</h2>
          <h3><span>Description :</span> Samosas are a popular snack or appetizer in many regions of the world, including South Asia, Southeast Asia, and parts of Africa.</h3>
        </div>
        <div className='srate-sec3col-1 col-3'>
          <img src={cake} />
        </div>

      </div>

       {/* ----------juice-------------- */}
      
       <div className='srate-sec3 row'>
        <div className='srate-sec3col col-3'>
          <img src={juice} />
        </div>
        <div className='srate-sec3col2 col-9 card' style={{backgroundColor:'rgba(146, 42, 238, 0.25)'}}>
          <h1>Juice</h1>
          <h2><span>Incrediants :</span>puris, boiled chickpeas or potatoes, chutneys, spices, and chopped onions</h2>
          <h3><span>Description :</span> a popular Indian street food snack that consists of a hollow, crispy shell filled with a flavorful mixture of potatoes, chickpeas, and spices, and then topped with a sweet, sour, and spicy flavored water</h3>
        </div>

      </div>
      {/* --------------------ice cream--------------- */}
      <div className='srate-sec3-1 row'>
        <div className='srate-sec3col2-1 col-9 card' style={{backgroundColor:'rgba(36, 215, 66, 0.31)'}}>
          <h1>Ice Creame</h1>
          <h2><span>Incrediants :</span>All-purpose flour, Salt, Carrom Seeds, Ghee, Oil, Water</h2>
          <h3><span>Description :</span> Samosas are a popular snack or appetizer in many regions of the world, including South Asia, Southeast Asia, and parts of Africa.</h3>
        </div>
        <div className='srate-sec3col-1 col-3'>
          <img src={ice} />
        </div>

      </div>
           {/* ----------browni-------------- */}
           <div className='srate-sec3 row'>
        <div className='srate-sec3col col-3'>
          <img src={browni} />
        </div>
        <div className='srate-sec3col2 col-9 card' style={{backgroundColor:' rgba(73, 123, 96, 0.29)'}}>
          <h1>Browni</h1>
          <h2><span>Incrediants :</span>corn chat masala recipe, onion, tomato, green chilies, coriander leaves, cumin powder, chat masala, Lemon juice</h2>
          <h3><span>Description :</span> Corn Chat Masala features tender, sweet corn kernels tossed with a medley of chopped onions, tomatoes, and green chilies, elevating the dish with vibrant colors and crunch.</h3>
        </div>

      </div>
  
       


       
      


    </section>

  )
}

export default Foods