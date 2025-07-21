import React, { useState } from "react";

function Search({handleSearch,search}) {
  console.log(search)
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
