"use client"

import CustomerHeader from '@/app/_Components/CustomerHeader';
import React, { useEffect, useState } from 'react'

const RestaurantExplore = (props) => {
    let name=props.params.name;

    const [foods,setfoods]=useState([]);


    useEffect(()=>{
        Loadfoods();
    },[]);

    const Loadfoods=async()=>{
        const id=props.searchParams.id;
          let response=await fetch("http://localhost:3000/api/customer/locations/"+id);
          response=await response.json();
          if(response.success){
            setfoods(response.foodsdetails);
          }
    }
    
  return (
    <div>
        <CustomerHeader />
      <div className="banner-image">
        <h1>{decodeURI(name)}</h1>
      </div>
      <div className='parent-card'>
        {
             foods.length>0? foods.map((ele)=>(
                  <div className='card-wrapper'>
                        <div className='image-wrapper'>
                             <img src={ele.path} alt="" />
                        </div>
                        <div className='name-wrapper'>
                             <h3>name:{ele.name}</h3>
                        </div>
                        <div className='price-wrapper'>
                             <h4>Price:{ele.price}</h4>
                        </div>
                        <div className='description-wrapper'>
                             <h5>Description:{ele.description}</h5>
                        </div>
                         
                         <div className='parent-btn'>
                        <div>
                          <button>Add to cart</button>
                        </div>
                        </div>
                 
                  </div>
                  
              ))
              :"no foods item found"
        }
      </div>
    </div>
  )
}

export default RestaurantExplore;