import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Addfood = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const router=useRouter();
  const handleAddfood = async () => {
    if(!name || !price || !path || !description){
        setError(true);
        return false;
      }else{
        setError(false);
      }
    let resto_id;
    let restodata = JSON.parse(localStorage.getItem("userdata"));
    if (restodata) {
      resto_id = restodata._id;
    }
    let response = await fetch("http://localhost:3000/api/restaurant/foods", {
      method: "POST",
      body: JSON.stringify({ name, price, path, description, resto_id }),
    });

    response = await response.json();
    if (response.success) {
      alert("Food added");
           props.setAdditem(false);
    }else{
        alert("food not added");
    }
  };

  return (
    <div className="container">
      <h1>Add new food item</h1>
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
          <button className="button" onClick={handleAddfood}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addfood;
