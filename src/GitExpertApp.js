/** @format */

import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = props => {
  const [categories, setCategories] = useState(['']);

  return (
    <>
      <h2>GIF Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map(categorie => (
          <GifGrid key={categorie} categorie={categorie} />
        ))}
      </ol>
    </>
  );
};

export default GitExpertApp;
