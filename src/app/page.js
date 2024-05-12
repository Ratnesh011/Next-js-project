"use client";

import React, { useEffect, useState } from "react";
import CustomerHeader from "./_Components/CustomerHeader";
import Footer from "./_Components/Footer";
import { useRouter } from "next/navigation";

const page = () => {
  const [location, setLocations] = useState([]);
  const [restodetail,setRestodetail]=useState([]);
  const [selectedlocation,setSelectedlocation]=useState('');
  const [hidelist,setHidelist]=useState(false);

  const router=useRouter();

  useEffect(() => {
    loadlocation();
    loadrestodetail();
  }, []);

  const loadlocation = async () => {
    let response = await fetch("http://localhost:3000/api/customer/locations");
    response = await response.json();

    if (response.success) {
      setLocations(response.result);
    }
  };



  const loadrestodetail = async (params) => {
      let url="http://localhost:3000/api/customer";
    if(params?.location){
      url=url+"?location="+params.location;
    }else if(params?.restaurant){
      url=url +"?restaurant="+ params.restaurant;
    }
    let response = await fetch(url);
    response = await response.json();

    if (response.success) {
      setRestodetail(response.result);
    }
  };
  
  const handlelistdata=(item)=>{
           setSelectedlocation(item);
           setHidelist(false);
           loadrestodetail({location:item});
  }

  
  return (
    <div >
      <CustomerHeader />
      
      <div className="banner-image">
        <h1>Food Delivery App</h1>

        <div className="banner-input">
          <input
            type="text"
            className="select"
            placeholder="Select location"
            value={selectedlocation}
            onClick={()=>setHidelist(true)}
          />
          <ul className="locations-data">
          {
            hidelist && location?.map((item)=>(
              <li onClick={()=>{handlelistdata(item)}}>{item}</li>
            ))
          }
          </ul>
          <input
            type="text"
            className="food-name"
            placeholder="Enter foods or restaurant name"
            onChange={(e)=>loadrestodetail({restaurant:e.target.value})}
          />
        </div>
      </div>

      <div className="restaurant-parent">
         {
             restodetail.map((item)=>(
              <div onClick={()=>router.push("explore/"+item.restoname+"?id="+item._id)} className="restaurant-wrapper">
                    <div className="name-wrapper">
                         <h3>{item.restoname}</h3>
                         <h5>Contact:{item.contact}</h5>
                         {/* <h5>City:{item.city}</h5> */}

                    </div>
                    <div className="email">
                         <h5>Email:{item.email}</h5>
                    </div>
                    <div className="address">
                         <h5>Address:{item.address}</h5>
                    </div>
              </div>
          
             ))
         }
      </div>
      <Footer />
    </div>
  );
};

export default page;
