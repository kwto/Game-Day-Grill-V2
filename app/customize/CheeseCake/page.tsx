'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isWhipCreamCCChecked, setIsWhipCreamCCChecked] = useState(JSON.parse(localStorage.getItem('whipcreamcc')) || false);
  const [isStrawberryChecked, setIsStrawberryChecked] = useState(JSON.parse(localStorage.getItem('strawberry')) || false);

  useEffect(() => {
    localStorage.setItem('whipcreamcc', JSON.stringify(isWhipCreamCCChecked));
  }, [isWhipCreamCCChecked]);

  useEffect(() => {
    localStorage.setItem('strawberry', JSON.stringify(isStrawberryChecked));
  }, [isStrawberryChecked]);

  const handleWhipCreamCCCheckboxChange = (event) => {
    setIsWhipCreamCCChecked(event.target.checked);
  };

  const handleStrawberryCheckboxChange = (event) => {
    setIsStrawberryChecked(event.target.checked);
  };

  return (
    <div>
      Customize Cheese Cake
      <div>
        <label>
          <input type="checkbox" checked={isWhipCreamCCChecked} onChange={handleWhipCreamCCCheckboxChange} />
          Add Whipped Cream | $1
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isStrawberryChecked} onChange={handleStrawberryCheckboxChange} />
          Add Extra Strawberry Sauce | $2
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;