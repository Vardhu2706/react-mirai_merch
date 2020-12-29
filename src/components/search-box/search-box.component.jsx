// To-Do
import React from "react";
import "./search-box.styles.scss";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// Functional Component
const SearchBox = () => (
  <div>
    <div>
      <input
        type="text"
        className="searchTerm"
        placeholder="What are you looking for?"
      ></input>
      <button type="submit" className="searchButton">
        <SearchIcon className="shopping-icon" />
      </button>
    </div>
  </div>
);
// Export
export default SearchBox;
