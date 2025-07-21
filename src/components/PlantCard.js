import React from "react";
import { useState } from "react";

function PlantCard({item}) {
  const [stocked,setStocked]=useState(true)
  return (
    <li className="card">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Price: {item.price}</p>
      {stocked ? (
        <button className="primary" onClick={()=>setStocked(false)}>In Stock</button>
      ) : (
        <button onClick={()=>setStocked(true)} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
