'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isVanillaChecked, setIsVanillaChecked] = useState(JSON.parse(localStorage.getItem('vanilla')) || false);

  useEffect(() => {
    localStorage.setItem('vanilla', JSON.stringify(isVanillaChecked));
  }, [isVanillaChecked]);



  const handleVanillaCheckboxChange = (event) => {
    setIsVanillaChecked(event.target.checked);
  };



  return (
    <div>
      Customize Tiramisu
      <div>
        <label>
          <input type="checkbox" checked={isVanillaChecked} onChange={handleVanillaCheckboxChange} />
          Add Vanilla Ice Cream | $4.50
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;