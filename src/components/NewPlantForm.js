import React from "react";
import { useState } from "react";

function NewPlantForm() {
  const [formData,setFormData]=useState({
    name :"",
    image :"",
    price :""
  })
 
function handleSubmit(event) {
  event.preventDefault();

  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      image: formData.image,
      price: parseFloat(formData.price),
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Plant added:", data);
      setFormData({
        name: "",
        image: "",
        price: "",
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error.message);
    });

    window.location.reload()
  }

  console.log(formData)

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={(e)=>setFormData({ ...formData, name: e.target.value })} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={(e)=>setFormData({...formData, image : e.target.value})}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={(e)=>setFormData({...formData, price : e.target.value})}/>
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
