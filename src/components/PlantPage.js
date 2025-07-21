import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage() {
  const [search,setSearch]=useState("")

  function searchControl(e){
    setSearch(e.target.value)
  }

  return (
    <main>
      <NewPlantForm />
      <Search handleSearch={searchControl} search={search} />
      <PlantList search={search}/>
    </main>
  );
}

export default PlantPage;
