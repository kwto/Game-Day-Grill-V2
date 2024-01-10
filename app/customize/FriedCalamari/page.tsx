'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isLemonsChecked, setIsLemonsChecked] = useState(JSON.parse(localStorage.getItem('lemons')) || false);
  const [isTartarChecked, setIsTartarChecked] = useState(JSON.parse(localStorage.getItem('tartar')) || false);

  useEffect(() => {
    localStorage.setItem('lemons', JSON.stringify(isLemonsChecked));
  }, [isLemonsChecked]);

  useEffect(() => {
    localStorage.setItem('tartar', JSON.stringify(isTartarChecked));
  }, [isTartarChecked]);

  const handleLemonsCheckboxChange = (event) => {
    setIsLemonsChecked(event.target.checked);
  };

  const handleTartarCheckboxChange = (event) => {
    setIsTartarChecked(event.target.checked);
  };

  return (
    <div>
      Customize Fried Calamari
      <div>
        <label>
          <input type="checkbox" checked={isLemonsChecked} onChange={handleLemonsCheckboxChange} />
          Add Extra Lemons | $1.50
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isTartarChecked} onChange={handleTartarCheckboxChange} />
          Add Tartar Sauce | $1
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;