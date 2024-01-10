'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isRanchCTChecked, setIsRanchCTChecked] = useState(JSON.parse(localStorage.getItem('ranchct')) || false);


  useEffect(() => {
    localStorage.setItem('ranch', JSON.stringify(isRanchCTChecked));
  }, [isRanchCTChecked]);



  const handleRanchCTCheckboxChange = (event) => {
    setIsRanchCTChecked(event.target.checked);
  };


  return (
    <div>
      Customize Chicken Tenders
      <div>
        <label>
          <input type="checkbox" checked={isRanchCTChecked} onChange={handleRanchCTCheckboxChange} />
          Add Ranch | $0.50
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;