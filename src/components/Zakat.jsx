import React, { useState, useEffect } from 'react';

const Zakat = () => {
  // initialize state variables using the useState hook
  const [totalWealth, setTotalWealth] = useState();
  const [cash, setCash] = useState();
  const [gold, setGold] = useState();
  const [silver, setSilver] = useState();
  const [liabilities, setLiabilities] = useState();
  const [zakatAmount, setZakatAmount] = useState(0);
  const [isEligible, setIsEligible] = useState(true);

  // event handlers for when the input fields change
  const handleTotalWealthChange = (event) => {
    setTotalWealth(Number(event.target.value));
  };

  const handleCashChange = (event) => {
    setCash(Number(event.target.value));
  };

  const handleGoldChange = (event) => {
    setGold(Number(event.target.value));
  };

  const handleSilverChange = (event) => {
    setSilver(Number(event.target.value));
  };

  const handleLiabilitiesChange = (event) => {
    setLiabilities(Number(event.target.value));
  };

  // useEffect hook to calculate the zakat amount whenever the state variables change
  useEffect(() => {
    const totalAssets = cash + gold + silver;
    const zakatableWealth = totalAssets - liabilities - 20000;
    const zakatRate = 0.025;
    const zakat = zakatableWealth > 0 ? zakatableWealth * zakatRate : 0;
    setIsEligible(zakatableWealth > 0);
    setZakatAmount(zakat);
  }, [totalWealth, cash, gold, silver, liabilities]);

  // function to calculate the zakat amount to display in the input field
  const calculateZakatAmount = () => {
    return parseFloat(zakatAmount).toFixed(2);
  }

  return (
    <div>
      <h2 className="heading w-full bg-blue-400 rounded text-center text-lg">Zakat Calculator</h2>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <label htmlFor="totalWealth" className="block text-sm font-medium leading-6 text-gray-900">Total Wealth:</label>
        <input type="number" id="totalWealth" name="totalWealth" value={totalWealth} onChange={handleTotalWealthChange} className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <div>
        <label htmlFor="cash" className="block text-sm font-medium leading-6 text-gray-900">Cash: (Cash in hand & in bank accounts) (Cash deposited for some future purpose, e.g. Hajj)</label>
        <input type="number" id="cash" name="cash" value={cash} onChange={handleCashChange} className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <div>
        <label htmlFor="gold" className="block text-sm font-medium leading-6 text-gray-900">Gold:</label>
        <input type="number" id="gold" name="gold" value={gold} onChange={handleGoldChange} className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <div>
        <label htmlFor="silver" className="block text-sm font-medium leading-6 text-gray-900">Silver:</label>
        <input type="number" id="silver" name="silver" value={silver} onChange={handleSilverChange} className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
      <div>
        <label htmlFor="liabilities" className="block text-sm font-medium leading-6 text-gray-900">Liabilities:</label>
        <input type="number" id="liabilities" name="liabilities" value={liabilities} onChange={handleLiabilitiesChange} className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
      <div>
        <label htmlFor="zakatAmount" className="block text-sm font-medium leading-6 text-gray-900">Zakat Amount:</label>
        <input type="number" id="zakatAmount" name="zakatAmount" value={calculateZakatAmount()} readOnly className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
  );
}

export default Zakat;
