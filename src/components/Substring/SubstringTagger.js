import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tag } from '../Tag/Tag';
import processString from 'react-process-string';
import styles from './SubstringTagger.module.css';

export const SubstringTagger = ({ data }) => {
  // extract data from prop value
  const { text, nerTags } = data;

  // object to store key value pair where key is substring name and value is the jsx to render when it is found
  let objectMap = {};
  nerTags.forEach(
    value =>
      (objectMap[value.subString.toLowerCase()] = (
        <Tag string={value.subString} tag={value.tag} />
      ))
  );

  // regex to search for provided substring
  let re = new RegExp(nerTags.map(value => value.subString).join('|'), 'gim');

  // config object for helper library
  let config = [
    {
      regex: re,
      fn: (key, result) => {
        return (
          <Fragment key={key + result[0]}>
            {objectMap[result[0].toLowerCase()]}
          </Fragment>
        );
      }
    }
  ];

  // function call to helper library
  let result;
  try {
    result = processString(config)(text);
  } catch (err) {
    console.err(err.message);
    result = null;
  }

  // if result is returned then return result otherwise render plain text
  return <div className={styles.substring}>{result ? result : text}</div>;
};

// Prop type declaration
SubstringTagger.propTypes = {
  data: PropTypes.object.isRequired
};
