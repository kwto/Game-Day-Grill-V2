'use client'
import React, { useState, useEffect } from 'react';

function CheckboxMemory() {
  const [isStrawberryBananaChecked, setIsStrawberryBananaChecked] = useState(JSON.parse(localStorage.getItem('strawberrybanana')) || false);
  const [isBerryBlastChecked, setIsBerryBlastChecked] = useState(JSON.parse(localStorage.getItem('berryblast')) || false);
  const [isBananaMangoChecked, setIsBananaMangoChecked] = useState(JSON.parse(localStorage.getItem('bananamango')) || false);

  useEffect(() => {
    localStorage.setItem('strawberrybanana', JSON.stringify(isStrawberryBananaChecked));
  }, [isStrawberryBananaChecked]);

  useEffect(() => {
    localStorage.setItem('berryblast', JSON.stringify(isBerryBlastChecked));
  }, [isBerryBlastChecked]);

  useEffect(() => {
    localStorage.setItem('bananamango', JSON.stringify(isBananaMangoChecked));
  }, [isBananaMangoChecked]);

  const handleStrawberryBananaCheckboxChange = (event) => {
    setIsStrawberryBananaChecked(event.target.checked);
    if (event.target.checked) {
      setIsBerryBlastChecked(false);
      setIsBananaMangoChecked(false);
    }
  };

  const handleBerryBlastCheckboxChange = (event) => {
    setIsBerryBlastChecked(event.target.checked);
    if (event.target.checked) {
      setIsStrawberryBananaChecked(false);
      setIsBananaMangoChecked(false);
    }
  };

  const handleBananaMangoCheckboxChange = (event) => {
    setIsBananaMangoChecked(event.target.checked);
    if (event.target.checked) {
      setIsStrawberryBananaChecked(false);
      setIsBerryBlastChecked(false);
    }
  };

  return (
    <div>
      Flavors:
      <div>
        <label>
          <input type="checkbox" checked={isStrawberryBananaChecked} onChange={handleStrawberryBananaCheckboxChange} />
          Strawberry Banana
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isBerryBlastChecked} onChange={handleBerryBlastCheckboxChange} />
          Berry Blast
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isBananaMangoChecked} onChange={handleBananaMangoCheckboxChange} />
          Banana Mango
        </label>
      </div>
    </div>
  );
}

export default CheckboxMemory;