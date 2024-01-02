import { useCallback, useEffect, useState } from "react";
import InputBox from "./InputBox";
import { useCurrencyApi } from "../../hooks";

const CurrencyConvertor = () => {
  const [from, setFrom] = useState({ amount: 0, currency: "usd" });
  const [to, setTo] = useState({ currency: "inr" });
  const currencies = useCurrencyApi(from.currency);

  useEffect(() => {
    setTo((prev) => ({
      ...prev,
      amount: from.amount * currencies[to.currency],
    }));
  }, [from, to.currency, currencies]);

  const handleSwap = useCallback(() => {
    setFrom(to);
    setTo(from);
  }, [from, to]);

  return (
    <section className="w-full h-screen p-[2em] bg-green-50 flex gap-4 flex-col justify-center items-center duration-300">
      <h1 className="text-4xl font-bold text-center">Currency Convertor</h1>

      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/60">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={from.amount}
              currency={from.currency}
              handleChange={setFrom}
              currencyOptions={Object.keys(currencies)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="px-4 pt-0.5 pb-1 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-green-600 text-white border-[5px] border-white"
              onClick={handleSwap}
            >
              &larr; Swap &rarr;
            </button>
          </div>
          <div className="w-full mt-1">
            <InputBox
              label="To"
              amount={Number(to.amount)}
              currency={to.currency}
              handleChange={setTo}
              currencyOptions={Object.keys(currencies)}
              amountDisabled={true}
            />
          </div>
          {/* <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded-lg"
          >
            Convert
          </button> */}
        </form>
      </div>
    </section>
  );
};

export default CurrencyConvertor;
