'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isWhipCreamTChecked, setIsWhipCreamTChecked] = useState(JSON.parse(localStorage.getItem('whipcreamt')) || false);

  useEffect(() => {
    localStorage.setItem('whipcreamt', JSON.stringify(isWhipCreamTChecked));
  }, [isWhipCreamTChecked]);



  const handleWhipCreamTCheckboxChange = (event) => {
    setIsWhipCreamTChecked(event.target.checked);
  };



  return (
    <div>
      Customize Tiramisu
      <div>
        <label>
          <input type="checkbox" checked={isWhipCreamTChecked} onChange={handleWhipCreamTCheckboxChange} />
          Add Whipped Cream | $1
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;