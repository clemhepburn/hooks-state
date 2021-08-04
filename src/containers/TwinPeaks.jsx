
import React, { useState } from 'react';
import Quote from '../components/quote/Quote';
import Load from '../components/quote/Load';
import { fetchQuote } from '../services/twinPeaksAPI.js';

const TwinPeaks = () => {
  const [quote, setQuote] = useState({});
  

  const handleClick = async () => {
    const quote = await fetchQuote();
 
    setQuote({ quote });
  };
  
  return (
    <>
      <Quote quoteText={quote} />
      <Load onClick={handleClick} />
    </>
  );
};

export default TwinPeaks;
