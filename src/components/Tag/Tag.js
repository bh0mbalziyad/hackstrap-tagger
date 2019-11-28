import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

export const Tag = ({ string, tag }) => {
  return (
    <span style={{ backgroundColor: stringToColour(string) }} className='main'>
      <span className='string'>{string}</span>{' '}
      <span className='tag'>{tag}</span>
    </span>
  );
};

const stringToColour = str => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
};

Tag.propTypes = {
  string: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired
};
