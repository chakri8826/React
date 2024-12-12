import { useState, useEffect } from "react";
import { currencyData } from "./currencyData"; // Import the hardcoded data

export function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    
        //IT ALSO WORKS
        const result = currencyData[baseCurrency.toLowerCase()];
        setData(result);
    


    // if (!baseCurrency) {
    //   setError("Base currency is not provided");
    //   return;
    // }

    // // Simulate API call with hardcoded data
    // try {
    //   const result = currencyData[baseCurrency.toLowerCase()];
    //   if (!result) throw new Error("Currency not found");
    //   setData(result);
    // } catch (err) {
    //   console.error("Error fetching currency data:", err);
    //   setError(err.message);
    // }
  }, [baseCurrency]);

  return data;
}



// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//     )
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//     console.log(data);
//   }, [currency]);
//   console.log(data);
//   return data;
// }

// export default useCurrencyInfo;