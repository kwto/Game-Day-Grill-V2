'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isPicklesCSChecked, setIsPicklesCSChecked] = useState(JSON.parse(localStorage.getItem('picklescs')) || false);

  useEffect(() => {
    localStorage.setItem('picklescs', JSON.stringify(isPicklesCSChecked));
  }, [isPicklesCSChecked]);



  const handlePicklesCSCheckboxChange = (event) => {
    setIsPicklesCSChecked(event.target.checked);
  };



  return (
    <div>
      Customize Chicken Sandwich
      <div>
        <label>
          <input type="checkbox" checked={isPicklesCSChecked} onChange={handlePicklesCSCheckboxChange} />
          Add Pickles | $2
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;