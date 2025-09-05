import React from "react";
import './SearchBar.css';

export default function SearchBar({ value = '', onChange, placeholder = "Search providers..." }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
