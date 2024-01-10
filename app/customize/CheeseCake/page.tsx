'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isSalsaChecked, setIsSalsaChecked] = useState(JSON.parse(localStorage.getItem('salsa')) || false);
  const [isGuacamoleChecked, setIsGuacamoleChecked] = useState(JSON.parse(localStorage.getItem('guacamole')) || false);

  useEffect(() => {
    localStorage.setItem('salsa', JSON.stringify(isSalsaChecked));
  }, [isSalsaChecked]);

  useEffect(() => {
    localStorage.setItem('guacamole', JSON.stringify(isGuacamoleChecked));
  }, [isGuacamoleChecked]);

  const handleSalsaCheckboxChange = (event) => {
    setIsSalsaChecked(event.target.checked);
  };

  const handleGuacamoleCheckboxChange = (event) => {
    setIsGuacamoleChecked(event.target.checked);
  };

  return (
    <div>
      Customize Cheese Cake
      <div>
        <label>
          <input type="checkbox" checked={isSalsaChecked} onChange={handleSalsaCheckboxChange} />
          Add Whipped Cream | $1
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isGuacamoleChecked} onChange={handleGuacamoleCheckboxChange} />
          Add Guacamole | $2
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;