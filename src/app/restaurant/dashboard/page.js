"use client"

import Header from '@/app/_Components/Header';
import React, { useState } from 'react'
import './../style.css';
import Addfood from '@/app/_Components/Addfood';
import FoodItemList from '@/app/_Components/FoodItemList';


const Dashboard = () => {
  const[additem,setAdditem]=useState(false);
  return (
    <div>
    <Header />
    <button onClick={()=>setAdditem(true)}>Add food</button>
    <button onClick={()=>setAdditem(false)}>Dashboard</button>
    

    {
      additem?<Addfood  setAdditem={setAdditem} />:<FoodItemList />
    }
        
    </div>
  )
}

export default Dashboard;