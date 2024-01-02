import { useId } from "react";

function InputBox({
  label = "",
  amount = 0,
  currency = "usd",
  handleChange,
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const inputId = useId();
  const selectId = useId();

  return (
    <div className={"flex bg-white p-3 rounded-lg"}>
      <div className="w-1/2">
        <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={inputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            handleChange &&
            handleChange((prev) => ({
              ...prev,
              amount: Number(e.target.value),
            }))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          id={selectId}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none uppercase"
          disabled={currencyDisabled}
          value={currency}
          onChange={(e) =>
            handleChange &&
            handleChange((prev) => ({
              ...prev,
              currency: e.target.value,
            }))
          }
        >
          {currencyOptions.map((item) => (
            <option key={item} value={item} className="uppercase">
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
