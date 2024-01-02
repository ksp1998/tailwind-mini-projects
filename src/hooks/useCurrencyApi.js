import { useEffect, useState } from "react";

const useCurrencyApi = (currencyCode) => {
  const [conversionRates, setConversionRates] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyCode}.json`
    )
      .then((response) => response.json())
      .then((response) => setConversionRates(response[currencyCode]))
      .catch((error) => console.error(error));
  }, [currencyCode]);

  return conversionRates;
};

export default useCurrencyApi;
