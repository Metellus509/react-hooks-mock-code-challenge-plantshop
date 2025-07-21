import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({search}) {
  const [plants,setPlants]=useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(r=>r.json())
    .then(data=>setPlants(data))
  
  //console.log(plants)
  },[])

    const filteredPlants = plants.filter((plant) =>
    search.trim() === ""
      ? true
      : plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="cards">{
      filteredPlants.map((item,index)=>(
        <PlantCard item={item}/>
      ))
      }</ul>
  );
}

export default PlantList;
