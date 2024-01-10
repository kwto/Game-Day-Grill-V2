'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isMarinaraChecked, setIsMarinaraChecked] = useState(JSON.parse(localStorage.getItem('marinara')) || false);

  useEffect(() => {
    localStorage.setItem('marinara', JSON.stringify(isMarinaraChecked));
  }, [isMarinaraChecked]);



  const handleSalsaCheckboxChange = (event) => {
    setIsMarinaraChecked(event.target.checked);
  };



  return (
    <div>
      Customize Mozzarella Sticks
      <div>
        <label>
          <input type="checkbox" checked={isMarinaraChecked} onChange={handleSalsaCheckboxChange} />
          Add Marinara Sauce | $1
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;