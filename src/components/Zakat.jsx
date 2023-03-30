import React, { useState } from 'react';

const Zakat = () => {
  const [totalWealth, setTotalWealth] = useState();
  const [zakatAmount, setZakatAmount] = useState();
  const [isEligible, setIsEligible] = useState(true);

  const handleTotalWealthChange = (event) => {
    setTotalWealth(Number(event.target.value));
  };

  const calculateZakat = () => {
    const zakatableWealth = totalWealth - 20000; // Subtract nisab (minimum amount of wealth required to pay Zakat)
    const zakatRate = 0.025; // Zakat rate is 2.5% (or 0.025)
    const zakat = zakatableWealth * zakatRate;
    if (zakatableWealth < 0) {
      setIsEligible(false);
      setZakatAmount(0);
    } else {
      setIsEligible(true);
      setZakatAmount(zakat);
    }
  };

  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <h2 className="heading w-full bg-blue-400 rounded text-center text-lg">Zakat Calculator</h2>
      <label htmlFor="totalWealth" className="block text-sm font-medium leading-6 text-gray-900">Total Wealth:</label>
      <div className='pb-3'>
      <input type="number" id="totalWealth" name="totalWealth" value={totalWealth} onChange={handleTotalWealthChange} className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <button onClick={calculateZakat} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calculate Zakat</button>
      {!isEligible && (
        <p className="text-red-500 mt-4">Sorry, you're not eligible for Zakat.</p>
      )}
      {isEligible && zakatAmount > 0 && (
        <p className="result mt-2 bg-blue-400 py-3 rounded text-center">Your Zakat Amount: <span className="font-bold">{zakatAmount}</span></p>
      )}
    </div>
  );
};

export default Zakat;
