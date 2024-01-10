'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isRanchChecked, setIsRanchChecked] = useState(JSON.parse(localStorage.getItem('ranch')) || false);


  useEffect(() => {
    localStorage.setItem('ranch', JSON.stringify(isRanchChecked));
  }, [isRanchChecked]);



  const handleRanchCheckboxChange = (event) => {
    setIsRanchChecked(event.target.checked);
  };


  return (
    <div>
      Customize GameDay Wings
      <div>
        <label>
          <input type="checkbox" checked={isRanchChecked} onChange={handleRanchCheckboxChange} />
          Add Ranch | $0.50
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;