import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.module.css';

export const Tag = ({ string, tag }) => {
  return (
    <div style={{ backgroundColor: getColor() }} className={styles.main}>
      <p className={styles.string}>
        {string}
        <span className={styles.tag}>{tag}</span>
      </p>
    </div>
  );
};

const getColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const colors = [
  '#E467AE',
  '#BABABA',
  '#A9DB39',
  '#45C5FA',
  '#FE9629',
  '#31BAA8'
];

Tag.propTypes = {
  string: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired
};
