import { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const psswordInputRef = useRef();
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState({
    length: 8,
    number: false,
    specialChars: false,
  });

  const generatePassword = useCallback((length, options) => {
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newPassword = charSet.charAt(parseInt(Math.random() * charSet.length));

    if (options?.number) {
      const numberChars = "0123456789";
      charSet += numberChars;
      // Ensure at least 1 number is present
      newPassword += numberChars.charAt(
        parseInt(Math.random() * numberChars.length)
      );
    }

    if (options?.specialChars) {
      let specialChars = "!@#$%^&*()-_+=<>?/{}[]|";
      charSet += specialChars;
      // Ensure at least 1 special char is present
      newPassword += specialChars.charAt(
        parseInt(Math.random() * specialChars.length)
      );
    }

    while (newPassword.length < length) {
      const randomChar = charSet[parseInt(Math.random() * charSet.length)];
      newPassword += randomChar;
    }

    // Shuffle the password characters
    newPassword = newPassword
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return newPassword;
  }, []);

  useEffect(() => {
    const newPassword = generatePassword(options.length, options);
    setPassword(newPassword);
  }, [options, setPassword, generatePassword]);

  const handleCopyPassword = () => {
    psswordInputRef.current.select();
    navigator.clipboard
      .writeText(password)
      .then(() => alert("Password copied to clipboard..."))
      .catch((err) => console.error("Unable to copy password!", err));
  };

  return (
    <section className="w-full h-screen p-[2em] bg-red-50 flex gap-4 flex-col justify-center items-center duration-300">
      <h1 className="text-4xl font-bold text-center">Password Generator</h1>

      <div className="p-5 flex flex-col gap-5 bg-white w-lg-[500px] rounded-lg shadow-xl">
        <div className="flex w-full justify-center">
          <input
            type="text"
            placeholder="Password"
            value={password}
            className="flex-grow px-3 py-2 rounded-l-md border border-black/30 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            ref={psswordInputRef}
          ></input>
          <button
            className="px-3 py-2 rounded-r-md border border-black/30 bg-red-600 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black duration-300"
            onClick={handleCopyPassword}
          >
            Copy &rarr;
          </button>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <label className="w-full flex gap-1 justify-center items-center">
            <input
              type="range"
              min={8}
              max={20}
              className="accent-red-600"
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  length: e.target.value,
                }))
              }
              readOnly
            />
            Length ({options.length})
          </label>
          <label className="flex gap-1 items-center font-bold accent-red-600">
            <input
              className="w-4 h-4"
              defaultChecked={options.number}
              type="checkbox"
              onChange={() =>
                setOptions((prev) => ({ ...prev, number: !options.number }))
              }
            />
            Number
          </label>
          <label className="flex gap-1 items-center font-bold accent-red-600">
            <input
              className="w-4 h-4"
              defaultChecked={options.specialChars}
              type="checkbox"
              onChange={() =>
                setOptions((prev) => ({
                  ...prev,
                  specialChars: !options.specialChars,
                }))
              }
            />
            Special Characters
          </label>
        </div>
      </div>
    </section>
  );
};

export default PasswordGenerator;
