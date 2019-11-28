import React from 'react';
import PropTypes from 'prop-types';
import { stringToColour } from '../../utils/Colors';
import './Tag.css';

export const Tag = ({ string, tag }) => {
  return (
    <span
      style={{ backgroundColor: stringToColour(string + tag) }}
      className='main'
    >
      <span className='string'>{string}</span>{' '}
      <span className='tag'>{tag}</span>
    </span>
  );
};

Tag.propTypes = {
  string: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired
};
