'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isSpriteChecked, setIsSpriteChecked] = useState(JSON.parse(localStorage.getItem('sprite')) || false);
  const [isCocaColaChecked, setIsCocaColaChecked] = useState(JSON.parse(localStorage.getItem('cocacola')) || false);
  const [isDrPepperChecked, setIsDrPepperChecked] = useState(JSON.parse(localStorage.getItem('drpepper')) || false);
  const [isDietCokeChecked, setIsDietCokeChecked] = useState(JSON.parse(localStorage.getItem('dietcoke')) || false);
  const [isFantaChecked, setIsFantaChecked] = useState(JSON.parse(localStorage.getItem('fanta')) || false);


  useEffect(() => {
    localStorage.setItem('sprite', JSON.stringify(isSpriteChecked));
  }, [isSpriteChecked]);

  useEffect(() => {
    localStorage.setItem('cocacola', JSON.stringify(isCocaColaChecked));
  }, [isCocaColaChecked]);

  useEffect(() => {
    localStorage.setItem('drpepper', JSON.stringify(isDrPepperChecked));
  }, [isDrPepperChecked]);

  useEffect(() => {
    localStorage.setItem('dietcoke', JSON.stringify(isDietCokeChecked));
  }, [isDietCokeChecked]);

  useEffect(() => {
    localStorage.setItem('fanta', JSON.stringify(isFantaChecked));
  }, [isFantaChecked]);


  const handleSpriteCheckboxChange = (event) => {
    setIsSpriteChecked(event.target.checked);
    if (event.target.checked) {
      setIsCocaColaChecked(false);
      setIsDrPepperChecked(false);
      setIsDietCokeChecked(false);
      setIsFantaChecked(false);
    }
  };

  const handleCocaColaCheckboxChange = (event) => {
    setIsCocaColaChecked(event.target.checked);
    if (event.target.checked) {
      setIsSpriteChecked(false);
      setIsDrPepperChecked(false);
      setIsDietCokeChecked(false);
      setIsFantaChecked(false);
    }
  };

  const handleDrPepperCheckboxChange = (event) => {
    setIsDrPepperChecked(event.target.checked);
    if (event.target.checked) {
      setIsSpriteChecked(false);
      setIsCocaColaChecked(false);
      setIsDietCokeChecked(false);
      setIsFantaChecked(false);
    }
  };

  const handleDietCokeCheckboxChange = (event) => {
    setIsDietCokeChecked(event.target.checked);
    if (event.target.checked) {
      setIsSpriteChecked(false);
      setIsCocaColaChecked(false);
      setIsDrPepperChecked(false);
      setIsFantaChecked(false);
    }
  };

  const handleFantaCheckboxChange = (event) => {
    setIsFantaChecked(event.target.checked);
    if (event.target.checked) {
      setIsSpriteChecked(false);
      setIsCocaColaChecked(false);
      setIsDrPepperChecked(false);
      setIsDietCokeChecked(false);
    }
  };

  return (
    <div>
      Drinks:
      <div>
        <label>
          <input type="checkbox" checked={isSpriteChecked} onChange={handleSpriteCheckboxChange} />
          Sprite
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isCocaColaChecked} onChange={handleCocaColaCheckboxChange} />
          Coca-Cola
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isDrPepperChecked} onChange={handleDrPepperCheckboxChange} />
         Dr. Pepper
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isDietCokeChecked} onChange={handleDietCokeCheckboxChange} />
          Diet Coke
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isFantaChecked} onChange={handleFantaCheckboxChange} />
          Fanta
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;