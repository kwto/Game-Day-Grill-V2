'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isChocolateSChecked, setIsChocolateSChecked] = useState(JSON.parse(localStorage.getItem('chocolates')) || false);
  const [isVanillaSChecked, setIsVanillaSChecked] = useState(JSON.parse(localStorage.getItem('vanillas')) || false);
  const [isStrawberrySChecked, setIsStrawberrySChecked] = useState(JSON.parse(localStorage.getItem('strawberrys')) || false);

  useEffect(() => {
    localStorage.setItem('chocolates', JSON.stringify(isChocolateSChecked));
  }, [isChocolateSChecked]);

  useEffect(() => {
    localStorage.setItem('vanillas', JSON.stringify(isVanillaSChecked));
  }, [isVanillaSChecked]);

  useEffect(() => {
    localStorage.setItem('strawberrys', JSON.stringify(isStrawberrySChecked));
  }, [isStrawberrySChecked]);

  const handleChocolateSCheckboxChange = (event) => {
    setIsChocolateSChecked(event.target.checked);
    if (event.target.checked) {
      setIsVanillaSChecked(false);
      setIsStrawberrySChecked(false);
    }
  };

  const handleVanillaSCheckboxChange = (event) => {
    setIsVanillaSChecked(event.target.checked);
    if (event.target.checked) {
      setIsChocolateSChecked(false);
      setIsStrawberrySChecked(false);
    }
  };

  const handleStrawberrySCheckboxChange = (event) => {
    setIsStrawberrySChecked(event.target.checked);
    if (event.target.checked) {
      setIsChocolateSChecked(false);
      setIsVanillaSChecked(false);
    }
  };

  return (
    <div>
      Flavors:
      <div>
        <label>
          <input type="checkbox" checked={isChocolateSChecked} onChange={handleChocolateSCheckboxChange} />
          Strawberry Banana
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isVanillaSChecked} onChange={handleVanillaSCheckboxChange} />
          Berry Blast
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isStrawberrySChecked} onChange={handleStrawberrySCheckboxChange} />
          Banana Mango
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;