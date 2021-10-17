/** @format */

import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = props => {
  const { setCategories } = props;
  const [inputValue, setImputValue] = useState('');
  const handleInpuntChange = e => {
    const value = e.target.value;
    setImputValue(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats]);
      setImputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={e => handleInpuntChange(e)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
