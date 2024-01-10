'use client'
import React, { useState, useEffect } from 'react';


function CheckboxMemory() {
  const [isPattyVChecked, setIsPattyVChecked] = useState(JSON.parse(localStorage.getItem('pattyv')) || false);
  const [isLettuceVChecked, setIsLettuceVChecked] = useState(JSON.parse(localStorage.getItem('lettucev')) || false);
  const [isTomatoesVChecked, setIsTomatoesVChecked] = useState(JSON.parse(localStorage.getItem('tomatoesv')) || false);
  const [isBaconVChecked, setIsBaconVChecked] = useState(JSON.parse(localStorage.getItem('baconv')) || false);
  const [isCheeseVChecked, setIsCheeseVChecked] = useState(JSON.parse(localStorage.getItem('cheesev')) || false);
  const [isFriesVChecked, setIsFriesVChecked] = useState(JSON.parse(localStorage.getItem('friesv')) || false);




  useEffect(() => {
    localStorage.setItem('pattyv', JSON.stringify(isPattyVChecked));
  }, [isPattyVChecked]);


  useEffect(() => {
    localStorage.setItem('lettucev', JSON.stringify(isLettuceVChecked));
  }, [isLettuceVChecked]);


  useEffect(() => {
    localStorage.setItem('tomatoesv', JSON.stringify(isTomatoesVChecked));
  }, [isTomatoesVChecked]);


  useEffect(() => {
    localStorage.setItem('baconv', JSON.stringify(isBaconVChecked));
  }, [isBaconVChecked]);


  useEffect(() => {
    localStorage.setItem('cheesev', JSON.stringify(isCheeseVChecked));
  }, [isCheeseVChecked]);


  useEffect(() => {
    localStorage.setItem('friesv', JSON.stringify(isFriesVChecked));
  }, [isFriesVChecked]);




  const handlePattyVCheckboxChange = (event) => {
    setIsPattyVChecked(event.target.checked);
  };


  const handleLettuceVCheckboxChange = (event) => {
    setIsLettuceVChecked(event.target.checked);
  };


  const handleTomatoesVCheckboxChange = (event) => {
    setIsTomatoesVChecked(event.target.checked);
  };


  const handleBaconVCheckboxChange = (event) => {
    setIsBaconVChecked(event.target.checked);
  };


  const handleCheeseVCheckboxChange = (event) => {
    setIsCheeseVChecked(event.target.checked);
  };


  const handleFriesVCheckboxChange = (event) => {
    setIsFriesVChecked(event.target.checked);
  };


  return (
    <div>
      Customize Vegan Burger
      <div>
        <label>
          <input type="checkbox" checked={isPattyVChecked} onChange={handlePattyVCheckboxChange} />
          Add Extra Patty | $4.50
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isLettuceVChecked} onChange={handleLettuceVCheckboxChange} />
          Add Lettuce | $3
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isTomatoesVChecked} onChange={handleTomatoesVCheckboxChange} />
          Add Tomatoes | $2
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isBaconVChecked} onChange={handleBaconVCheckboxChange} />
          Add Bacon | $3.50
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isCheeseVChecked} onChange={handleCheeseVCheckboxChange} />
          Add Cheese | $1.50
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isFriesVChecked} onChange={handleFriesVCheckboxChange} />
          Add Extra Fries | $4
        </label>
      </div>
    </div>
  );
}


export default CheckboxMemory;

