 "use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Editfood = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const router=useRouter();
  const handleEditfood = async () => {
    if(!name || !price || !path || !description){
        setError(true);
        return false;
      }else{
        setError(false);
      }

      let response=await fetch("http://localhost:3000/api/restaurant/foods/edit/"+props.params.id,{
        method:"PUT",
        body:JSON.stringify({name,price,path:path,description})
      })

      response=await response.json();
      if(response.success){
        alert("Updated successfully");
        router.push("/restaurant/dashboard");
      }
    }


    useEffect(()=>{
          handledata();
    },[])
      
    async function handledata(){
         let response=await fetch("http://localhost:3000/api/restaurant/foods/edit/"+props.params.id);
          response=await response.json();
          if(response.success) {
            setName(response.result.name);
            setPrice(response.result.price)
            setPath(response.result.path)
            setDescription(response.result.description)
           }
    }
    
      

  return (
    <div className="container">
      <h1>update food item</h1>
      <div>
        <div className="input-upper">
          <input
            type="text"
            placeholder="Food name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
           {
            error && !name && <span className="input-error">enter name</span>
          }
        </div>
        <div className="input-upper">
          <input
            type="text"
            placeholder="Price"
            className="input-field"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {
            error && !price && <span className="input-error">enter price</span>
          }
        </div>
        <div className="input-upper">
          <input
            type="text"
            placeholder="Image path"
            className="input-field"
            value={path}
            onChange={(e) => setPath(e.target.value)}
          />
           {
            error && !path && <span className="input-error">enter image path</span>
          }
        </div>
        <div className="input-upper">
          <input
            type="text"
            placeholder="Description"
            className="input-field"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
           {
            error && !description && <span className="input-error">enter description</span>
          }
        </div>
        <div className="input-upper">
          <button className="button" onClick={handleEditfood}>
            Add
          </button>
        </div>
        <div className="input-upper">
          <button className="button" onClick={()=>router.push("../dashboard")}>
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editfood;
