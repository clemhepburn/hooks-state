import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
  <div>
    <button onClick={onClick}>Load</button>
  </div>
);

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Load;
