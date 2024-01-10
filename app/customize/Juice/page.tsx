'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isOrangeChecked, setIsOrangeChecked] = useState(JSON.parse(localStorage.getItem('orange')) || false);
  const [isAppleChecked, setIsAppleChecked] = useState(JSON.parse(localStorage.getItem('apple')) || false);
  const [isWatermelonChecked, setIsWatermelonChecked] = useState(JSON.parse(localStorage.getItem('watermelon')) || false);
  const [isGrapeChecked, setIsGrapeChecked] = useState(JSON.parse(localStorage.getItem('grape')) || false);
  const [isCranberryChecked, setIsCranberryChecked] = useState(JSON.parse(localStorage.getItem('cranberry')) || false);


  useEffect(() => {
    localStorage.setItem('orange', JSON.stringify(isOrangeChecked));
  }, [isOrangeChecked]);

  useEffect(() => {
    localStorage.setItem('apple', JSON.stringify(isAppleChecked));
  }, [isAppleChecked]);

  useEffect(() => {
    localStorage.setItem('watermelon', JSON.stringify(isWatermelonChecked));
  }, [isWatermelonChecked]);

  useEffect(() => {
    localStorage.setItem('grape', JSON.stringify(isGrapeChecked));
  }, [isGrapeChecked]);

  useEffect(() => {
    localStorage.setItem('cranberry', JSON.stringify(isCranberryChecked));
  }, [isCranberryChecked]);


  const handleOrangeCheckboxChange = (event) => {
    setIsOrangeChecked(event.target.checked);
    if (event.target.checked) {
      setIsAppleChecked(false);
      setIsWatermelonChecked(false);
      setIsGrapeChecked(false);
      setIsCranberryChecked(false);
    }
  };

  const handleAppleCheckboxChange = (event) => {
    setIsAppleChecked(event.target.checked);
    if (event.target.checked) {
      setIsOrangeChecked(false);
      setIsWatermelonChecked(false);
      setIsGrapeChecked(false);
      setIsCranberryChecked(false);
    }
  };

  const handleWatermelonCheckboxChange = (event) => {
    setIsWatermelonChecked(event.target.checked);
    if (event.target.checked) {
      setIsOrangeChecked(false);
      setIsAppleChecked(false);
      setIsGrapeChecked(false);
      setIsCranberryChecked(false);
    }
  };

  const handleGrapeCheckboxChange = (event) => {
    setIsGrapeChecked(event.target.checked);
    if (event.target.checked) {
      setIsOrangeChecked(false);
      setIsAppleChecked(false);
      setIsWatermelonChecked(false);
      setIsCranberryChecked(false);
    }
  };

  const handleCranberryCheckboxChange = (event) => {
    setIsCranberryChecked(event.target.checked);
    if (event.target.checked) {
      setIsOrangeChecked(false);
      setIsAppleChecked(false);
      setIsWatermelonChecked(false);
      setIsGrapeChecked(false);
    }
  };

  return (
    <div>
      Flavors:
      <div>
        <label>
          <input type="checkbox" checked={isOrangeChecked} onChange={handleOrangeCheckboxChange} />
          Orange
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isAppleChecked} onChange={handleAppleCheckboxChange} />
          Apple
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isWatermelonChecked} onChange={handleWatermelonCheckboxChange} />
          Watermelon
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isGrapeChecked} onChange={handleGrapeCheckboxChange} />
          Grape
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isCranberryChecked} onChange={handleCranberryCheckboxChange} />
          Cranberry
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;