import React, { useState } from "react";

const Usher = () => {
  const [billAmount, setBillAmount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [selectedPercentage, setSelectedPercentage] = useState(15);

  const calculateTip = (percentage) => {
    const tipAmount = (billAmount * percentage) / 100;
    const totalAmount = billAmount + tipAmount;
    const perPerson = totalAmount / numberOfPeople;

    return {
      tipAmount,
      totalAmount,
      perPerson,
    };
  };

  const handlePercentage = (percentage) => {
    setSelectedPercentage(percentage);
  };

  return (
    <div>
      <div>
        <h1 className="heading w-full bg-blue-400 rounded text-center text-lg">Usher Calculator</h1>
        <div className="relative mt-2 rounded-md shadow-sm">
        <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Bill Amount:
            </label>
            <input
              className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="number"
              placeholder="Bill Amount"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
            />
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Number Of People:
            </label>
            <input
              className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="number"
              placeholder="Number of People"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
            />
            <div className="space-x-4 pt-2">
              <button
                className={`${selectedPercentage === 15
                    ? ""
                    : ""
                  } text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                onClick={() => handlePercentage(15)}
              >
                15%
              </button>
              <button
                className={`${selectedPercentage === 20
                    ? ""
                    : ""
                  } text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                onClick={() => handlePercentage(20)}
              >
                20%
              </button>
              <button
                className={`${selectedPercentage === 25
                    ? ""
                    : ""
                  } text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                onClick={() => handlePercentage(25)}
              >
                25%
              </button>
            </div>
            {billAmount && numberOfPeople && (
              <div>
                <p className="result mt-2 bg-blue-400 py-3 rounded text-center font-medium">
                  Tip amount: {calculateTip(selectedPercentage).tipAmount}
                </p>
                <p className="result mt-2 bg-blue-400 py-3 rounded text-center font-medium">
                  Total amount: {calculateTip(selectedPercentage).totalAmount}
                </p>
                <p className="result mt-2 bg-blue-400 py-3 rounded text-center font-medium">
                  Amount per person: {calculateTip(selectedPercentage).perPerson}
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Usher;
