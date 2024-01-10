'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isPattyGDChecked, setIsPattyGDChecked] = useState(JSON.parse(localStorage.getItem('pattygd')) || false);
  const [isLettuceGDChecked, setIsLettuceGDChecked] = useState(JSON.parse(localStorage.getItem('lettucegd')) || false);
  const [isTomatoesGDChecked, setIsTomatoesGDChecked] = useState(JSON.parse(localStorage.getItem('tomatoesgd')) || false);
  const [isBaconGDChecked, setIsBaconGDChecked] = useState(JSON.parse(localStorage.getItem('bacongd')) || false);
  const [isCheeseGDChecked, setIsCheeseGDChecked] = useState(JSON.parse(localStorage.getItem('cheesegd')) || false);
  const [isFriesGDChecked, setIsFriesGDChecked] = useState(JSON.parse(localStorage.getItem('friesgd')) || false);


  useEffect(() => {
    localStorage.setItem('pattygd', JSON.stringify(isPattyGDChecked));
  }, [isPattyGDChecked]);

  useEffect(() => {
    localStorage.setItem('lettucegd', JSON.stringify(isLettuceGDChecked));
  }, [isLettuceGDChecked]);

  useEffect(() => {
    localStorage.setItem('tomatoesgd', JSON.stringify(isTomatoesGDChecked));
  }, [isTomatoesGDChecked]);

  useEffect(() => {
    localStorage.setItem('bacongd', JSON.stringify(isBaconGDChecked));
  }, [isBaconGDChecked]);

  useEffect(() => {
    localStorage.setItem('cheesegd', JSON.stringify(isCheeseGDChecked));
  }, [isCheeseGDChecked]);

  useEffect(() => {
    localStorage.setItem('friesgd', JSON.stringify(isFriesGDChecked));
  }, [isFriesGDChecked]);


  const handlePattyGDCheckboxChange = (event) => {
    setIsPattyGDChecked(event.target.checked);
  };

  const handleLettuceGDCheckboxChange = (event) => {
    setIsLettuceGDChecked(event.target.checked);
  };

  const handleTomatoesGDCheckboxChange = (event) => {
    setIsTomatoesGDChecked(event.target.checked);
  };

  const handleBaconGDCheckboxChange = (event) => {
    setIsBaconGDChecked(event.target.checked);
  };

  const handleCheeseGDCheckboxChange = (event) => {
    setIsCheeseGDChecked(event.target.checked);
  };

  const handleFriesGDCheckboxChange = (event) => {
    setIsFriesGDChecked(event.target.checked);
  };

  return (
    <div>
      Customize GameDay Burger
      <div>
        <label>
          <input type="checkbox" checked={isPattyGDChecked} onChange={handlePattyGDCheckboxChange} />
          Add Extra Patty | $4.50
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isLettuceGDChecked} onChange={handleLettuceGDCheckboxChange} />
          Add Lettuce | $3
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isTomatoesGDChecked} onChange={handleTomatoesGDCheckboxChange} />
          Add Tomatoes | $2
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isBaconGDChecked} onChange={handleBaconGDCheckboxChange} />
          Add Bacon | $3.50
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isCheeseGDChecked} onChange={handleCheeseGDCheckboxChange} />
          Add Cheese | $1.50
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isFriesGDChecked} onChange={handleFriesGDCheckboxChange} />
          Add Extra Fries | $4
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;