import React from 'react';
import './FilterPanel.css';

export default function FilterPanel() {
  return (
    <div className="filter-panel">
      <label>
        Category:
        <select>
          <option>All</option>
          <option>Cleaning</option>
          <option>Plumbing</option>
          <option>Education</option>
        </select>
      </label>
      <label>
        Max price:
        <input type="range" min="0" max="200" />
      </label>
    </div>
  );
}
