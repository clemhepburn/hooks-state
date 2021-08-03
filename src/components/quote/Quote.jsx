import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quoteText: { quote } }) => (
  <div>
    <p>{quote}</p>
  </div>
);

Quote.propTypes = {
  quoteText: PropTypes.object,
  quote: PropTypes.string,
};

export default Quote;
