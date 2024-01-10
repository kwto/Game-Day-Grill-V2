'use client'
import React, { useState, useEffect } from 'react';


function CheckboxMemory() {
  const [isPattyTCChecked, setIsPattyTCChecked] = useState(JSON.parse(localStorage.getItem('pattytc')) || false);
  const [isLettuceTCChecked, setIsLettuceTCChecked] = useState(JSON.parse(localStorage.getItem('lettucetc')) || false);
  const [isTomatoesTCChecked, setIsTomatoesTCChecked] = useState(JSON.parse(localStorage.getItem('tomatoestc')) || false);
  const [isBaconTCChecked, setIsBaconTCChecked] = useState(JSON.parse(localStorage.getItem('bacontc')) || false);
  const [isCheeseTCChecked, setIsCheeseTCChecked] = useState(JSON.parse(localStorage.getItem('cheesetc')) || false);
  const [isFriesTCChecked, setIsFriesTCChecked] = useState(JSON.parse(localStorage.getItem('friestc')) || false);




  useEffect(() => {
    localStorage.setItem('pattytc', JSON.stringify(isPattyTCChecked));
  }, [isPattyTCChecked]);


  useEffect(() => {
    localStorage.setItem('lettucetc', JSON.stringify(isLettuceTCChecked));
  }, [isLettuceTCChecked]);


  useEffect(() => {
    localStorage.setItem('tomatoestc', JSON.stringify(isTomatoesTCChecked));
  }, [isTomatoesTCChecked]);


  useEffect(() => {
    localStorage.setItem('bacontc', JSON.stringify(isBaconTCChecked));
  }, [isBaconTCChecked]);


  useEffect(() => {
    localStorage.setItem('cheesetc', JSON.stringify(isCheeseTCChecked));
  }, [isCheeseTCChecked]);


  useEffect(() => {
    localStorage.setItem('friestc', JSON.stringify(isFriesTCChecked));
  }, [isFriesTCChecked]);




  const handlePattyTCCheckboxChange = (event) => {
    setIsPattyTCChecked(event.target.checked);
  };


  const handleLettuceTCCheckboxChange = (event) => {
    setIsLettuceTCChecked(event.target.checked);
  };


  const handleTomatoesTCCheckboxChange = (event) => {
    setIsTomatoesTCChecked(event.target.checked);
  };


  const handleBaconTCCheckboxChange = (event) => {
    setIsBaconTCChecked(event.target.checked);
  };


  const handleCheeseTCCheckboxChange = (event) => {
    setIsCheeseTCChecked(event.target.checked);
  };


  const handleFriesTCCheckboxChange = (event) => {
    setIsFriesTCChecked(event.target.checked);
  };


  return (
    <div>
      Customize The Classic Burger
      <div>
        <label>
          <input type="checkbox" checked={isPattyTCChecked} onChange={handlePattyTCCheckboxChange} />
          Add Extra Patty | $4.50
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isLettuceTCChecked} onChange={handleLettuceTCCheckboxChange} />
          Add Lettuce | $3
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isTomatoesTCChecked} onChange={handleTomatoesTCCheckboxChange} />
          Add Tomatoes | $2
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isBaconTCChecked} onChange={handleBaconTCCheckboxChange} />
          Add Bacon | $3.50
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isCheeseTCChecked} onChange={handleCheeseTCCheckboxChange} />
          Add Cheese | $1.50
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isFriesTCChecked} onChange={handleFriesTCCheckboxChange} />
          Add Extra Fries | $4
        </label>
      </div>
    </div>
  );
}


export default CheckboxMemory;







