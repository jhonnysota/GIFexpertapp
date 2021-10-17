/** @format */

import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = (props) => {
  const { setCategories } = props;
  const [inputValue, setImputValue] = useState('');
  const handleInpuntChange = (e) => {
    const value = e.target.value;
    setImputValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setImputValue('');
    }
  };
  const handleDeleteList = () => {
    setCategories([]);
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'contents' }}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => handleInpuntChange(e)}
          style={{ width: '60%' }}
        />
      </form>

      <button
        onClick={handleDeleteList}
        style={{ width: '20%', marginLeft: '10px' }}
      >
        Limpiar Listado
      </button>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
