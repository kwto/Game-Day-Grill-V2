'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isPicklesGCSChecked, setIsPicklesGCSChecked] = useState(JSON.parse(localStorage.getItem('picklesgcs')) || false);

  useEffect(() => {
    localStorage.setItem('picklesgcs', JSON.stringify(isPicklesGCSChecked));
  }, [isPicklesGCSChecked]);



  const handlePicklesGCSCheckboxChange = (event) => {
    setIsPicklesGCSChecked(event.target.checked);
  };



  return (
    <div>
      Customize Chicken Sandwich
      <div>
        <label>
          <input type="checkbox" checked={isPicklesGCSChecked} onChange={handlePicklesGCSCheckboxChange} />
          Add Pickles | $2
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;