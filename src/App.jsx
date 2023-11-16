import React from 'react'
import { useState } from 'react';

import Header from './components/Header'
import Calculator from './components/Calculator';
import Results from './components/Results';

import { calculateCompoundInterest } from './util/compound-interest.js';

function App() {

  const [inputs, setInputs] = useState({
    principal: 0,
    rate: 0,
    time: 0,
  });

  const [results, setResults] = useState(null);

  const onValueChange = (event) => {
    const { id, value } = event.target;
    setInputs(prevInputs => {
      return {
        ...prevInputs,
        [id]: parseFloat(value),
      }
    });
  };

  const calculateResults = () => {
    const results = calculateCompoundInterest(inputs);
    setResults(results);
  };

  return (
    <>
      <Header />
      <Calculator handleOnChange={onValueChange} handleOnCalculate={calculateResults} />
      {results!=null && <Results values={results} />}
    </>
  );
}

export default App
