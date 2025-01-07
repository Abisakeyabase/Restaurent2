import React from 'react';
import { useState } from 'react';
import Categories from './Categories';

const Menus = () => {
  const [data, setdata] = useState(Categories)
  return (
    <section className='container' style={{ marginTop: "20px" }}>
      <h1 className='col text-center' style={{ color: 'black', backgroundColor: 'rgba(255, 194, 53, 0.82)', width: '100%', borderRadius: '20px 90px 40px 70px', padding: '3px' }}>Daily Menu's</h1>
      <div className='row' style={{ display: 'flex', flexWrap: 'wrap',marginLeft:'60px' }}>
        {data.map((values) => {
          // const {id,foodname,price,image}=values
          return (
            <div className="card mx-1 my-1" style={{ width: '14rem', height: "350px" }} key={values.id}>
              <img
                src={values.image} className="card-img-top" alt="Placeholder" style={{ height: '200px', padding: '1px' }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: 'center', fontSize: '25px', textTransform: 'capitalize', color: 'rgb(255, 64, 6)', fontWeight: '700' }}>{values.foodname}</h5>
                <p className="card-text" style={{
                  textAlign: 'center', fontSize: '18px', textTransform: 'capitalize', color: 'rgb(100, 90, 87)', fontWeight: '400'}}>Price:₹ {values.price}
                </p>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  );
};

export default Menus;
