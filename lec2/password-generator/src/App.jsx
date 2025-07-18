import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(10);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const generatePassword = () => {
    let chars = '';
    if (includeNumbers) chars += '0123456789';
    if (includeSpecial) chars += '!@#$%^&*()_+';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';

    if (chars.length === 0) return setPassword('');

    let newPass = '';
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * chars.length);
      newPass += chars[rand];
    }
    setPassword(newPass);
  };

  const copyToClipboard = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecial, includeUppercase, includeLowercase]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">Password Generator</h1>

        <div className="flex mb-4">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            className="flex-grow px-3 py-2 border rounded-l-md border-gray-300 focus:outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Length: {length}</label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 text-gray-700">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2"
            />
            Numbers
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeSpecial}
              onChange={() => setIncludeSpecial(!includeSpecial)}
              className="mr-2"
            />
            Special Chars
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="mr-2"
            />
            Uppercase
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="mr-2"
            />
            Lowercase
          </label>
        </div>

        <div className="mt-6">
          <button
            disabled
            className="w-full py-2 bg-purple-600 text-white font-medium rounded-md"
          >
            Hooks used: useRef, useState, useEffect
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
