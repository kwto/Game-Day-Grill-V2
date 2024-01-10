'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isWhipCreamICSChecked, setIsWhipCreamICSChecked] = useState(JSON.parse(localStorage.getItem('whipcreamics')) || false);
  const [isChocolateChecked, setIsChocolateChecked] = useState(JSON.parse(localStorage.getItem('chocolate')) || false);
  const [isCookieChecked, setIsCookieChecked] = useState(JSON.parse(localStorage.getItem('cookie')) || false);

  useEffect(() => {
    localStorage.setItem('whipcreamics', JSON.stringify(isWhipCreamICSChecked));
  }, [isWhipCreamICSChecked]);

  useEffect(() => {
    localStorage.setItem('chocolate', JSON.stringify(isChocolateChecked));
  }, [isChocolateChecked]);

  useEffect(() => {
    localStorage.setItem('cookie', JSON.stringify(isCookieChecked));
  }, [isCookieChecked]);




  const handleWhipCreamICSCheckboxChange = (event) => {
    setIsWhipCreamICSChecked(event.target.checked);
  };

  const handleChocolateCheckboxChange = (event) => {
    setIsChocolateChecked(event.target.checked);
  };

  const handleCookieCheckboxChange = (event) => {
    setIsCookieChecked(event.target.checked);
  };




  return (
    <div>
      Customize Ice Cream Sundae
      <div>
        <label>
          <input type="checkbox" checked={isWhipCreamICSChecked} onChange={handleWhipCreamICSCheckboxChange} />
          Add Extra Whip Cream | $1
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isChocolateChecked} onChange={handleChocolateCheckboxChange} />
          Add Extra Chocolate Sauce | $1
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isCookieChecked} onChange={handleCookieCheckboxChange} />
          Add Extra Cookie | $3.50
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;