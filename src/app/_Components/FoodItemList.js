import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const FoodItemList = () => {
 const[fooditem,setFooditem]=useState();
  const router=useRouter();

 useEffect(()=>{
     fooditemdata();
 },[]);
 
 const fooditemdata=async ()=>{
    let restodata=JSON.parse(localStorage.getItem("userdata"));
    let resto_id=restodata._id;
    let response=await fetch("http://localhost:3000/api/restaurant/foods/"+resto_id);
    response=await response.json();
      if(response.success){
            setFooditem(response.result);
      }else{
          alert("no data fecthing");
      }


 }

 const deletefood= async (id)=>{
           let response=await fetch("http://localhost:3000/api/restaurant/foods/"+id,{
            method:"DELETE"
           });

           response=await response.json();
           if(response.success){
                 fooditemdata();
           }else{
            alert('not delete');
           }
 }
  return (
    <div>
        <div>
            <table>
                <thead>
                <tr><td>s.no</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                    <td>Operations</td>
                </tr>   
                </thead>
                <tbody>
                   {

                    fooditem?.map((item,key)=>(
                        <tr>
                        <td>{key=key+1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td><img src={item.path} alt="" style={{width:"50px",height:"50px"}} /></td>
                       <td><button onClick={()=>deletefood(item._id)}>Delete</button>
                       <button onClick={()=>router.push("dashboard/"+item._id)}>Edit</button></td>
                </tr>  
                    ))
                   }
                
                
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default FoodItemList;