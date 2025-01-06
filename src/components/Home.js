import React from 'react';
import { useState } from 'react';
import Categories from './Categories';

const Home = () => {
    const[data,setdata]=useState(Categories)
  return (
  <section className='container' style={{marginTop:"20px"}}>
   <h1 className='col text-center' style={{ color: 'black',backgroundColor:'rgba(255, 194, 53, 0.82)', width:'100%', borderRadius:'20px 90px 40px 70px',padding:'3px'}}>Daily Menu's</h1>
    <div className='row' style={{border:'1px solid black',display:'flex',flexWrap:'wrap'}}>
        {data.map((values)=>{
            // const {id,foodname,price,image}=values
            return(
                <div className="card mx-2 my-1" style={{ width: '14rem',height:"350px" }} key={values.id}>
                <img
                  src={values.image}
                  className="card-img-top"
                  alt="Placeholder"
                  style={{height:'200px',padding:'8px'}}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:'center',fontSize:'25px',textTransform:'capitalize',color:'rgb(255, 64, 6)',fontWeight:'700'}}>{values.foodname}</h5>
                  <p className="card-text" style={{textAlign:'center',fontSize:'18px',textTransform:'capitalize',color:'rgb(100, 90, 87)',fontWeight:'400'

                  }}>Price:₹ {values.price}
                  </p>
                </div>
              </div>
            )
        })}
 
    </div>
    </section>  
  );
};

export default Home;
